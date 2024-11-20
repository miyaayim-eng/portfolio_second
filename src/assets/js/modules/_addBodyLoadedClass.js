export const addBodyLoadedClass = () => {
  const body = document.body;

  window.addEventListener('load', () => {
    body.classList.add('is-loaded');
  });
};
