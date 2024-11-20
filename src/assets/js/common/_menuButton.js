export const menuButton = () => {
  const button = document.querySelector('.js-menu-button');
  const content = document.querySelector('.js-menu-content');
  const overlay = document.querySelector('.js-menu-overlay');
  const contentAnchor = content.querySelectorAll('a[href^="#"]');
  const buttonToggleClass = 'is-active';
  const contentToggleClass = 'is-show';
  const bodyAddClass = 'is-fixed';
  let bodyOffsetY;
  let isBodyFixed = false; // bodyが固定しているかどうかを判定するフラグ

  const unsetFixed = () => {
    // body固定判定フラグがアリの場合、body固定解除
    document.body.classList.remove(bodyAddClass); // bodyの固定を戻す
    document.body.style.top = ''; // topプロパティの指定を除去
    window.scrollTo(0, bodyOffsetY); // メニューを開いた時のスクロール位置に戻す
    isBodyFixed = false; // body固定判定フラグをナシにする
  };

  // メニュークリック
  button.addEventListener('click', () => {
    button.classList.toggle(buttonToggleClass);
    content.classList.toggle(contentToggleClass);
    overlay.classList.toggle(contentToggleClass);

    if (!isBodyFixed) {
      // body固定判定フラグがナシの場合、body固定実行
      bodyOffsetY = window.scrollY; // 現在のスクロール量を取得
      document.body.style.top = `${-bodyOffsetY}px`; // topプロパティに現在のスクロール量を指定
      document.body.classList.add(bodyAddClass); // bodyを position:fixed で固定
      isBodyFixed = true; // body固定判定フラグをアリにする
    } else {
      unsetFixed();
    }
  });

  // ---ビューポートの幅が 1024 ピクセル以上の場合は解除---
  // MediaQueryListオブジェクトを作成
  const mediaQuery = window.matchMedia('(width > 1024px)');
  // コールバック関数を定義
  const handleViewportChange = (event) => {
    if (event.matches) {
      // console.log('Viewport is 1024px or wider');
      button.classList.remove(buttonToggleClass);
      content.classList.remove(contentToggleClass);
      overlay.classList.remove(contentToggleClass);
      if (isBodyFixed) {
        unsetFixed();
      }
    }
  };
  // 変更を検知するリスナーを追加
  mediaQuery.addEventListener('change', handleViewportChange);
  // 初回チェック
  if (mediaQuery.matches) {
    handleViewportChange(mediaQuery);
  }

  // メニュー内のアンカーリンクをクリックした場合は解除
  contentAnchor.forEach((anchor) => {
    anchor.addEventListener('click', () => {
      button.classList.remove(buttonToggleClass);
      content.classList.remove(contentToggleClass);
      overlay.classList.remove(contentToggleClass);

      if (isBodyFixed) {
        unsetFixed();
      }
    });
  });
};
