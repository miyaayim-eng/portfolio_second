const loadModules = async () => {
  try {
    // 全ページ共通
    const { headerFixed } = await import('./common/_headerFixed');
    headerFixed();
    const { menuButton } = await import('./common/_menuButton');
    menuButton();
    const { menuCurrent } = await import('./common/_menuCurrent');
    menuCurrent();
    const { scrollTop } = await import('./common/_scrollTop');
    scrollTop();
    const { setObserver } = await import('./common/_setObserver');
    setObserver();
    const { setScrollbarWidth } = await import('./common/_setScrollbarWidth');
    setScrollbarWidth();
    const { smoothScroll } = await import('./common/_smoothScroll');
    smoothScroll();

    // ページ毎のモジュール読み込み
    if (document.getElementById('home')) {
      const { home } = await import('./page/_home');
      home();
    }
    if (document.getElementById('works')) {
      const { works } = await import('./page/_works');
      works();
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to load modules', error);
  }
};

loadModules();
