// お問い合わせAPIの回数制限。Cloudflare D1 にカウンターを置く固定ウィンドウ方式。
// D1 は書き込みがすぐ読める（1つのSQL文で加算と判定を行う）ので、連続送信でも上限を超えない。
// KV は反映に最大60秒かかり、その間の連続送信を止められなかったため使わない。

// D1Database のうち、ここで使う操作だけを抜き出した型（テストで差し替えられるようにする）
export interface RateLimitStatement {
  bind(...values: unknown[]): RateLimitStatement;
  first<T = unknown>(): Promise<T | null>;
  run(): Promise<unknown>;
}

export interface RateLimitDatabase {
  prepare(query: string): RateLimitStatement;
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

// 期限切れの行を掃除する頻度（許可した送信のうち、この割合で実行する）
const CLEANUP_PROBABILITY = 0.05;

// 行が無ければ1で作り、あれば上限未満のときだけ加算する。
// 上限に達していると UPDATE が行われず、RETURNING は行を返さない。
const CONSUME_SQL = `
INSERT INTO contact_rate_limits (key, count, expires_at) VALUES (?1, 1, ?2)
ON CONFLICT(key) DO UPDATE SET count = count + 1 WHERE count < ?3
RETURNING count`;

const CLEANUP_SQL = 'DELETE FROM contact_rate_limits WHERE expires_at < ?1';

// IPアドレスやメールアドレスをそのままデータベースに残さない
const sha256Hex = async (value: string): Promise<string> => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

/**
 * カウンターを1つ進め、上限内かどうかを返す。
 * 上限に達している場合は書き込みが発生しない。
 */
export const consumeRateLimit = async (
  db: RateLimitDatabase,
  rule: RateLimitRule,
  identifier: string,
  nowMs: number = Date.now(),
  random: () => number = Math.random,
): Promise<RateLimitResult> => {
  const nowSeconds = Math.floor(nowMs / 1000);
  const windowIndex = Math.floor(nowSeconds / rule.windowSeconds);
  const windowEnd = (windowIndex + 1) * rule.windowSeconds;
  const key = `${rule.scope}:${await sha256Hex(identifier.toLowerCase())}:${windowIndex}`;

  const row = await db
    .prepare(CONSUME_SQL)
    .bind(key, windowEnd, rule.limit)
    .first<{ count: number }>();

  if (!row) {
    return { allowed: false, retryAfterSeconds: Math.max(1, windowEnd - nowSeconds) };
  }

  if (random() < CLEANUP_PROBABILITY) {
    await db.prepare(CLEANUP_SQL).bind(nowSeconds).run();
  }
  return { allowed: true, retryAfterSeconds: 0 };
};

/** 実行環境の値が D1 の束縛として使えるかを確かめる */
export const asRateLimitDatabase = (candidate: unknown): RateLimitDatabase | null => {
  if (typeof candidate !== 'object' || candidate === null) return null;
  return typeof (candidate as Partial<RateLimitDatabase>).prepare === 'function'
    ? (candidate as RateLimitDatabase)
    : null;
};
