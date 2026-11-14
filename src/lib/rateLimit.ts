// お問い合わせAPIの回数制限。Cloudflare KV にカウンターを置く固定ウィンドウ方式。
// KV は反映に時間差があるため厳密な上限ではないが、連続送信の悪用を抑えるには足りる。

// KVNamespace のうち、ここで使う操作だけを抜き出した型（テストで差し替えられるようにする）
export interface RateLimitStore {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

export interface RateLimitRule {
  /** キーの接頭辞（例: "ip" / "to"） */
  readonly scope: string;
  /** ウィンドウ内で許可する回数 */
  readonly limit: number;
  /** ウィンドウの長さ（秒） */
  readonly windowSeconds: number;
}

export interface RateLimitResult {
  readonly allowed: boolean;
  /** 次に試せるまでの秒数（allowed が false のとき） */
  readonly retryAfterSeconds: number;
}

// 同じIPからの送信: 10分に5回まで
export const IP_RULE: RateLimitRule = { scope: 'ip', limit: 5, windowSeconds: 600 };
// 同じ宛先への自動返信: 1時間に3回まで
export const RECIPIENT_RULE: RateLimitRule = { scope: 'to', limit: 3, windowSeconds: 3600 };

// KV の expirationTtl は60秒以上が必要
const MIN_TTL_SECONDS = 60;

// IPアドレスやメールアドレスをそのままKVのキーに残さない
const sha256Hex = async (value: string): Promise<string> => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

/**
 * カウンターを1つ進め、上限内かどうかを返す。
 * 上限に達している場合は書き込まない（KVの書き込み回数を消費させないため）。
 */
export const consumeRateLimit = async (
  store: RateLimitStore,
  rule: RateLimitRule,
  identifier: string,
  nowMs: number = Date.now(),
): Promise<RateLimitResult> => {
  const nowSeconds = Math.floor(nowMs / 1000);
  const windowIndex = Math.floor(nowSeconds / rule.windowSeconds);
  const windowEndsIn = (windowIndex + 1) * rule.windowSeconds - nowSeconds;
  const key = `rl:${rule.scope}:${await sha256Hex(identifier.toLowerCase())}:${windowIndex}`;

  const current = Number.parseInt((await store.get(key)) ?? '0', 10) || 0;
  if (current >= rule.limit) {
    return { allowed: false, retryAfterSeconds: windowEndsIn };
  }

  await store.put(key, String(current + 1), {
    expirationTtl: Math.max(MIN_TTL_SECONDS, windowEndsIn + MIN_TTL_SECONDS),
  });
  return { allowed: true, retryAfterSeconds: 0 };
};

/** 実行環境の値が KV の束縛として使えるかを確かめる */
export const asRateLimitStore = (candidate: unknown): RateLimitStore | null => {
  if (typeof candidate !== 'object' || candidate === null) return null;
  const store = candidate as Partial<RateLimitStore>;
  return typeof store.get === 'function' && typeof store.put === 'function'
    ? (candidate as RateLimitStore)
    : null;
};
