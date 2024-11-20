export const smoothScroll = () => {
  // headerの高さを取得し、headeHeightに代入
  // const headerHeight = document.querySelector('header').offsetHeight;

  // ドキュメントのルートエレメントを取得
  const root = document.documentElement;

  // ページ内スクロール
  //querySelectorAllメソッドを使用してページ内のhref属性が#で始まるものを選択
  //forEachメソッドを使って、各アンカータグにクリックされた時の処理
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      // クリックされたときのデフォルトの挙動を防ぐ
      event.preventDefault();

      // クリックされたアンカータグのhref属性を取得
      const href = anchor.getAttribute('href');

      // href属性の#を取り除いた部分と一致するIDを取得
      const target = document.getElementById(href.replace('#', ''));

      //getBoundingClientRect()を呼び出して、現在のスクロール位置から指定要素までの相対距離を取得
      const targetTop = target.getBoundingClientRect().top;
      // ページ上の位置を計算 = 現在のスクロール位置 + 指定要素までの相対距離
      const targetPosition = window.scrollY + targetTop;

      // CSSカスタムプロパティの値を取得
      const headerHeightNormal = getComputedStyle(root).getPropertyValue('--header-height');
      const headerHeightSmall = getComputedStyle(root).getPropertyValue('--header-height-small');
      // スクロール位置によってヘッダー高さが可変するため、飛び先の位置を可変するヘッダー高さに合わせて位置調整
      let headerHeight = '';
      if (targetPosition <= 350) {
        headerHeight = headerHeightNormal;
      } else {
        headerHeight = headerHeightSmall;
      }
      // headerHeightから'px'の値を削除
      headerHeight = headerHeight.replace('px', '').trim();

      // スクロール先の位置 = スクロール先の位置 - ヘッダー高さ
      const top = targetPosition - headerHeight;

      // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    });
  });

  // ページ外スクロール
  // ページが読み込まれたら処理を実行
  window.addEventListener('DOMContentLoaded', () => {
    // URLオブジェクトを使用して、現在のURLを解析し、ハッシュ値を取得
    const url = new URL(location.href);

    // slice()メソッドを使って、ハッシュ値の先頭の#を除去
    const hash = url.hash.slice(1);

    //取得したハッシュ値をIDとして持つ要素を取得
    const target = document.getElementById(hash);

    //targetに対応する要素が存在する場合、以下の処理を実行
    if (target) {
      //getBoundingClientRect()を呼び出して、現在のスクロール位置から指定要素までの相対距離を取得
      const targetTop = target.getBoundingClientRect().top;
      // ページ上の位置を計算 = 現在のスクロール位置 + 指定要素までの相対距離
      const targetPosition = window.scrollY + targetTop;

      // ヘッダー高さを取得
      // CSSカスタムプロパティの値を取得
      const headerHeightNormal = getComputedStyle(root).getPropertyValue('--header-height');
      const headerHeightSmall = getComputedStyle(root).getPropertyValue('--header-height-small');
      // スクロール位置によってヘッダー高さが可変するため、飛び先の位置を可変するヘッダー高さに合わせて位置調整
      let headerHeight = '';
      if (targetPosition <= 350) {
        headerHeight = headerHeightNormal;
      } else {
        headerHeight = headerHeightSmall;
      }
      // headerHeightから'px'の値を削除
      headerHeight = headerHeight.replace('px', '').trim();

      // スクロール先の位置 = スクロール先の位置 - ヘッダー高さ
      const top = targetTop - headerHeight;

      //setTimeout()を使って、スクロール位置を初期化
      setTimeout(() => {
        window.scrollTo({ top: 0 }, 0);
      });

      //setTimeout()を使って、スクロール位置を設定します。この処理は、先程と同じ方法でスクロール位置を計算し、window.scrollTo()メソッドを呼び出して、スムーズなスクロールを実現
      setTimeout(() => {
        window.scrollTo({
          top: top,
          behavior: 'smooth',
        });
      });
    }
  });
};
