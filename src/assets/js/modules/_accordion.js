export const accordion = () => {
  const accordions = document.querySelectorAll('.js-accordion');

  accordions.forEach((accordion) => {
    const button = accordion.querySelector('button');
    const content = accordion.querySelector('.js-accordion-content');

    button.addEventListener('click', () => {
      button.classList.toggle('is-active');
      content.classList.toggle('is-show');
    });
  });
};
