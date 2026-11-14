-- お問い合わせAPIの回数制限用カウンター（src/lib/rateLimit.ts）
-- key: 種類・ハッシュ化した識別子・ウィンドウ番号 / expires_at: ウィンドウの終わり（UNIX秒）
CREATE TABLE IF NOT EXISTS contact_rate_limits (
  key TEXT PRIMARY KEY,
  count INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_contact_rate_limits_expires_at ON contact_rate_limits (expires_at);
