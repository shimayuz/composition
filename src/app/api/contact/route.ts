import { NextResponse } from 'next/server';
import { escapeHtml, isSameOriginRequest, validateContactInput } from '../../../lib/contactValidation';

// Edge Runtimeを使用（Cloudflare Workersとの互換性のため）
export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    // 自サイトのフォーム以外（他サイトのページなど）からの送信を拒否する
    if (!isSameOriginRequest(request.headers.get('origin'), request.headers.get('host'))) {
      return NextResponse.json(
        { error: '不正なリクエストです' },
        { status: 403 }
      );
    }

    // バリデーション（宛先は1件のみ・長さの上限・改行の除去）
    const validation = validateContactInput(await request.json().catch(() => null));
    if (!validation.ok) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }
    const { name, email, phone, company, subject, message } = validation.value;

    // HTMLメールに埋め込む値はエスケープする
    const html = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || '未入力'),
      company: escapeHtml(company || '未入力'),
      subject: escapeHtml(subject),
      message: escapeHtml(message),
    };

    // Mailgun API設定
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY || '';
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || '';
    const MAILGUN_BASE_URL = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;
    const EMAIL_FROM = process.env.EMAIL_FROM || 'info@composition2940.com';
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'yusukefukushima@composition2940.com';

    // 管理者向けメールの内容
    const adminMailFormData = new FormData();
    adminMailFormData.append('from', `コンポジションウェブサイト <${EMAIL_FROM}>`);
    adminMailFormData.append('to', ADMIN_EMAIL);
    adminMailFormData.append('subject', `【お問い合わせ】${subject}`);
    adminMailFormData.append('text', `
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}
会社名: ${company || '未入力'}
件名: ${subject}

お問い合わせ内容:
${message}
`);
    adminMailFormData.append('html', `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">ウェブサイトからのお問い合わせ</h2>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #eee;">お名前</th>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${html.name}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #eee;">メールアドレス</th>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${html.email}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #eee;">電話番号</th>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${html.phone}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #eee;">会社名</th>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${html.company}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #eee;">件名</th>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${html.subject}</td>
    </tr>
  </table>
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
    <h3 style="margin-top: 0; color: #333;">お問い合わせ内容</h3>
    <p style="white-space: pre-line;">${html.message}</p>
  </div>
</div>
`);

    // 自動返信メールの内容
    // 入力された名前・件名・本文は載せない（第三者宛てに任意の文面を送る手段にさせないため）
    const autoReplyFormData = new FormData();
    autoReplyFormData.append('from', `合同会社コンポジション <${EMAIL_FROM}>`);
    autoReplyFormData.append('to', email);
    autoReplyFormData.append('subject', '【自動返信】お問い合わせありがとうございます');
    autoReplyFormData.append('text', `
お問い合わせいただき、ありがとうございます。
お問い合わせを受け付けました。

内容を確認次第、担当者より折り返しご連絡いたします。
通常、2営業日以内にご返信いたしますので、今しばらくお待ちください。

このメールは自動返信です。
このメールに返信されても対応できませんのでご了承ください。

--
合同会社コンポジション
〒155-0032
東京都世田谷区代沢5-19-12 2F
TEL: 090-1695-6422
Email: info@composition2940.com
`);
    autoReplyFormData.append('html', `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">お問い合わせありがとうございます</h2>
  <p>お問い合わせいただき、ありがとうございます。<br>お問い合わせを受け付けました。</p>
  
  <p>内容を確認次第、担当者より折り返しご連絡いたします。<br>通常、2営業日以内にご返信いたしますので、今しばらくお待ちください。</p>
  
  <p><em>このメールは自動返信です。<br>このメールに返信されても対応できませんのでご了承ください。</em></p>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9em; color: #666;">
    <p>
      合同会社コンポジション<br>
      〒155-0032<br>
      東京都世田谷区代沢5-19-12 2F<br>
      TEL: 090-1695-6422<br>
      Email: info@composition2940.com
    </p>
  </div>
</div>
`);

    // Basic認証用のエンコード
    const authHeader = 'Basic ' + btoa(`api:${MAILGUN_API_KEY}`);

    // メール送信（管理者向けと自動返信を並行して送信）
    const [adminResponse, autoReplyResponse] = await Promise.all([
      fetch(MAILGUN_BASE_URL, {
        method: 'POST',
        headers: {
          'Authorization': authHeader
        },
        body: adminMailFormData
      }),
      fetch(MAILGUN_BASE_URL, {
        method: 'POST',
        headers: {
          'Authorization': authHeader
        },
        body: autoReplyFormData
      })
    ]);

    // レスポンスの確認
    if (!adminResponse.ok || !autoReplyResponse.ok) {
      console.error('管理者メール送信エラー:', await adminResponse.text());
      console.error('自動返信メール送信エラー:', await autoReplyResponse.text());
      return NextResponse.json(
        { error: 'メール送信に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('お問い合わせ送信エラー:', error);
    return NextResponse.json(
      { error: 'お問い合わせの送信に失敗しました' },
      { status: 500 }
    );
  }
}
