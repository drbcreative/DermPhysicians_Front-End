/* Nav and Menu */
/* collect DOM elements and set consts */
const navToggle = document.querySelector('.menu-trigger'),
  navMenu = document.querySelector('.slide-menu-wrapper'),
  topBar = document.querySelector('.topbar'),
  topbarLeft = document.querySelector('#topbar-left'),
  logoHeader = document.querySelector('.logo-header'),
  toggleOpen = document.querySelector('#toggle-open'),
  toggleClose = document.querySelector('#toggle-close'),
  menuTriggerText = document.querySelector('.menu--trigger-text'),
  navHeader = document.querySelector('.nav-header'),
  heroInfo = document.querySelector('#hero-info');

/* store consts */
const activeElements = [
  navMenu,
  topBar,
  topbarLeft,
  logoHeader,
  toggleOpen,
  toggleClose,
  menuTriggerText,
  navHeader,
  // bgOverlay,
  heroInfo
];

const showElements = [
  logoHeader,
  navHeader
];

/* open menu function */
const openMenu = () => {
  activeElements.forEach((el) => {
    el.classList.add('active');
  });
}
/* close menu function */
const closeMenu = () => {
  activeElements.forEach((el) => {
    el.classList.remove('active');
  });
}

navToggle.addEventListener('click', (e) => {
  /* check to see status of toggle */
  const toggleTarget = e.target;
  if (!toggleTarget.classList.contains('active')) {
    openMenu();
  } else {
    toggleTarget.classList.remove('active');
    closeMenu();
  }
});

navMenu.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.dataset.toggle && !target.dataset.ignore) {
    closeMenu();
  }
});

/* Adjust navbar when scrolling */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  // console.log(scrollY);
  if (scrollY > 100) {
    showElements.forEach((el) => {
      el.classList.add('show');
    });
  } else if (scrollY < 100) {
    showElements.forEach((el) => {
      el.classList.remove('show');
    });
  }
});