export const works = async () => {
  const { accordion } = await import('../modules/_accordion');
  accordion();
};
