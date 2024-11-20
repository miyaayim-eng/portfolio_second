export const setScrollbarWidth = () => {
  // html要素を取得
  const html = document.documentElement;

  // div要素を作成し、スタイルを付与
  const div = document.createElement('div');
  div.style.visibility = 'hidden';
  div.style.overflow = 'scroll';

  // 作成したdiv要素をbody要素に追加
  document.body.appendChild(div);

  // html要素のCSSカスタムプロパティである--scrollbarWidthに、計算されたスクロールバーの幅を設定しています。
  const scrollbarWidth = div.offsetWidth - div.clientWidth;
  html.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`);

  // 作成したdiv要素を削除
  document.body.removeChild(div);

  // console.log('scrollbarWidth =>', scrollbarWidth);
};
