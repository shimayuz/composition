'use client';

/**
 * 指定された要素IDへスムーズにスクロールする関数
 * @param elementId スクロール先の要素ID (ハッシュなし)
 * @param offset スクロール位置のオフセット（ピクセル）
 */
export const smoothScrollTo = (elementId: string, offset: number = 0): void => {
  // ハッシュを取り除く
  const targetId = elementId.startsWith('#') ? elementId.substring(1) : elementId;
  
  // 対象の要素を取得
  const element = document.getElementById(targetId);
  
  if (element) {
    // 要素の位置を取得し、オフセットを適用
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    // スムーズスクロールを実行
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * ハッシュリンクのクリックイベントを処理する関数
 * @param e イベントオブジェクト
 * @param pathname 現在のパス
 * @param offset スクロール位置のオフセット（ピクセル）
 * @param callback スクロール後に実行するコールバック関数（オプション）
 */
export const handleHashLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>, 
  pathname: string,
  offset: number = 80,
  callback?: () => void
): void => {
  const href = e.currentTarget.getAttribute('href');
  
  // ハッシュリンクかどうかを確認
  if (href && href.includes('#')) {
    const isExternalPage = href.includes('/') && !href.startsWith('#');
    
    // 同じページ内のハッシュリンクの場合
    if (!isExternalPage && pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('#', '');
      smoothScrollTo(targetId, offset);
      
      // URLのハッシュを更新（履歴に追加せず）
      window.history.replaceState(null, '', href);
      
      // コールバックがあれば実行
      if (callback) callback();
    }
  }
};
