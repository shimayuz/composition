// お問い合わせフォームの入力検証。
// このAPIは受け取ったメールアドレス宛てに自動返信を送るため、
// 検証が甘いと第三者へのメール送信に悪用される。

export interface ContactInput {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly company: string;
  readonly subject: string;
  readonly message: string;
}

export type ContactValidationResult =
  | { readonly ok: true; readonly value: ContactInput }
  | { readonly ok: false; readonly error: string };

const MAX_LENGTH = {
  name: 100,
  email: 254,
  phone: 30,
  company: 200,
  subject: 200,
  message: 5000,
} as const;

// 宛先は1件だけ。カンマ・セミコロン・空白・山かっこ・改行を含むものは受け付けない
// （Mailgunの to はカンマ区切りで複数宛先を受け取るため）
const EMAIL_PATTERN = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

const toText = (value: unknown): string | null =>
  value === undefined || value === null ? '' : typeof value === 'string' ? value : null;

// 1行の項目から改行と制御文字を取り除く（メールヘッダーへの行の混入を防ぐ）
const singleLine = (value: string): string =>
  value.replace(/[\u0000-\u001f\u007f]+/g, ' ').trim();

export const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const validateContactInput = (body: unknown): ContactValidationResult => {
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return { ok: false, error: '入力内容が正しくありません' };
  }
  const raw = body as Record<string, unknown>;

  const fields = {
    name: toText(raw.name),
    email: toText(raw.email),
    phone: toText(raw.phone),
    company: toText(raw.company),
    subject: toText(raw.subject),
    message: toText(raw.message),
  };
  if (Object.values(fields).some((value) => value === null)) {
    return { ok: false, error: '入力内容が正しくありません' };
  }

  const value: ContactInput = {
    name: singleLine(fields.name as string),
    email: (fields.email as string).trim(),
    phone: singleLine(fields.phone as string),
    company: singleLine(fields.company as string),
    subject: singleLine(fields.subject as string),
    message: (fields.message as string).replace(/\r\n/g, '\n').trim(),
  };

  if (!value.name || !value.email || !value.subject || !value.message) {
    return { ok: false, error: '必須項目が入力されていません' };
  }
  if (raw.privacy !== true) {
    return { ok: false, error: 'プライバシーポリシーへの同意が必要です' };
  }
  const tooLong = (Object.keys(MAX_LENGTH) as (keyof typeof MAX_LENGTH)[]).find(
    (key) => value[key].length > MAX_LENGTH[key],
  );
  if (tooLong) {
    return { ok: false, error: '入力が長すぎる項目があります' };
  }
  if (!EMAIL_PATTERN.test(value.email)) {
    return { ok: false, error: 'メールアドレスの形式が正しくありません' };
  }

  return { ok: true, value };
};

// 自サイトのページから送られたリクエストかどうか（Origin と Host が一致するか）
export const isSameOriginRequest = (origin: string | null, host: string | null): boolean => {
  if (!origin || !host) return false;
  try {
    return new URL(origin).host.toLowerCase() === host.toLowerCase();
  } catch {
    return false;
  }
};
