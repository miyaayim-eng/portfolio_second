// Swiper読み込み
import Swiper from 'swiper'; // Swiperの最小限の機能を読み込み（データ量削減の為）
import { Autoplay, EffectFade } from 'swiper/modules'; // Swiperの最低限必要なモジュールの読み込み（データ量削減の為）

// SwiperのCSS読み込み
import 'swiper/css'; // Swiperの最小限のCSSを読み込み（データ量削減の為）
import 'swiper/css/autoplay'; // 自動再生部分のCSSを読み込み（データ量削減の為）
import 'swiper/css/effect-fade'; // ページネーション部分のCSSを読み込み（データ量削減の為）

// customOptionsのデフォルト値に空のオブジェクトを設定
// （customOptionsが未定義 (undefined) にならず、エラーを防ぐため）
export const swiper = (identifier, customOptions = {}) => {
  const defaultOptions = {
    modules: [Autoplay, EffectFade],
    loop: true, // スライドの繰り返し（初期値: false）
    speed: 2000, // スライド切り替え時の推移時間[ms]（初期値: 300）
    effect: 'fade', // スライド切り替え時のエフェクト（初期値: 'slide'）
    allowTouchMove: false, // タッチスワイプを無効化
    simulateTouch: false, // マウスドラッグを無効化
    // 自動再生
    autoplay: {
      delay: 5000, // スライド切り替え間隔[ms]（初期値: 3000）
      // disableOnInteraction: false, // ユーザーがスライド操作時に自動再生オフ（初期値: true）
    },
  };

  // カスタムオプションをデフォルトオプションにマージ
  const options = { ...defaultOptions, ...customOptions };

  new Swiper(`.js-swiper[data-swiper='${identifier}']`, options);
};
