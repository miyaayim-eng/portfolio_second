export const scrollTop = () => {
  const button = document.querySelector('.js-scroll-top-button');
  const scrollContainer = button.parentElement;

  // スクロールイベント
  window.addEventListener('scroll', () => {
    // ウィンドウのスクロール位置を取得
    const scrolled = window.scrollY;

    // スクロール位置が350以上の場合、クラスを追加する
    if (scrolled >= 350) {
      scrollContainer.classList.add('is-show');
    } else {
      scrollContainer.classList.remove('is-show');
      scrollContainer.classList.remove('is-active');
    }
  });

  // クリックイベント
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    scrollContainer.classList.add('is-active');
  });
};
