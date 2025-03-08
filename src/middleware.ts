import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ミドルウェア関数
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 現在のURLをログに出力（デバッグ用）
  console.log('Middleware accessed:', pathname);
  
  // 特定のパスに対する処理
  if (pathname === '/privacy-policy') {
    // プライバシーポリシーページへのアクセスを確認
    console.log('Privacy Policy page accessed');
    return NextResponse.next();
  }
  
  if (pathname === '/specified-commercial-transaction') {
    // 特定商取引法ページへのアクセスを確認
    console.log('Specified Commercial Transaction page accessed');
    return NextResponse.next();
  }
  
  // その他のパスはそのまま処理
  return NextResponse.next();
}

// ミドルウェアを適用するパスを設定
export const config = {
  matcher: [
    '/privacy-policy',
    '/specified-commercial-transaction',
  ],
};
