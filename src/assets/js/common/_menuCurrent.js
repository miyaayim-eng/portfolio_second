export const menuCurrent = () => {
  const currentPath = window.location.pathname; // 現在のページのパス部分を取得
  const targets = document.querySelectorAll('.js-menu-link-target');

  targets.forEach((target) => {
    const targetPath = new URL(target.href).pathname; // 各リンクのパス部分を取得

    // 現在のパスとリンクのパスが一致している場合にクラスを追加する
    if (currentPath === targetPath) {
      target.parentElement.classList.add('is-current');
    }
  });
};
