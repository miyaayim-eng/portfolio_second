export const home = async () => {
  const { swiper } = await import('../modules/_swiper');
  swiper('01');
  const { addBodyLoadedClass } = await import('../modules/_addBodyLoadedClass');
  addBodyLoadedClass();
};
