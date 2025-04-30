const headerScrollMenu = document.querySelector('.header-scroll-menu');
const sectionsButtons = document.querySelector(
  '.header-menu__sections-buttons-list'
);
const assembleComp = document.querySelector(
  '.header-menu__assemble-computer-button'
);
const contentContainer = document.querySelector(
  '.header-menu__content-container-scroll'
);

const stickyClass = 'sticky';
const whiteClass = 'white';
const scrollThreshold = 5;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    headerScrollMenu.classList.add(stickyClass);
    headerScrollMenu.classList.add(whiteClass);
    sectionsButtons.style.display = 'none';
    assembleComp.style.display = 'none';
    contentContainer.style.gridTemplateRows = '64px 18px';
  } else {
    headerScrollMenu.classList.remove(stickyClass);
    headerScrollMenu.classList.remove(whiteClass);
    sectionsButtons.style.display = 'flex';
    assembleComp.style.display = 'flex';
    contentContainer.style.gridTemplateRows = '64px 58px';
  }
});
