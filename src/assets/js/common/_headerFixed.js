export const headerFixed = () => {
  // ページのヘッダーエレメントを取得する
  const header = document.querySelector('.js-header');

  const toggleHeaderFixed = () => {
    // ウィンドウのスクロール位置を取得
    const scroll = window.scrollY;

    // スクロール位置が350以上の場合、クラスを追加する
    if (scroll >= 350) {
      header.classList.add('is-fixed');
    } else {
      header.classList.remove('is-fixed');
    }
  };

  // スクロールイベントリスナーを追加する
  window.addEventListener('scroll', toggleHeaderFixed);

  // loadイベントでも実行する
  window.addEventListener('load', toggleHeaderFixed);
};
