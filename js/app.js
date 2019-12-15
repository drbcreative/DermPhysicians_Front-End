const beforeAfterSelects = document.querySelectorAll('.ba-select'),
  carouselWrappers = document.querySelectorAll('.carousel-wrapper');

beforeAfterSelects.forEach((el) => {
  el.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('active')) {
      return false;
    } else {
      assignSelector(target);
    }

  });
});

const clearSelectors = (target) => {
  const clearThis = target;
  clearThis.classList.remove('active');
}

const clearCarousels = () => {
  carouselWrappers.forEach((el) => {
    el.classList.remove('active');
  })
}

const assignSelector = (target) => {
  beforeAfterSelects.forEach((selects) => {
    selects.classList.remove('active');
  });
  const assignThis = target;
  assignThis.classList.add('active');

  if (assignThis === beforeAfterSelects[0]) {
    clearCarousels();
    carouselWrappers[0].classList.add('active');
  } else if (assignThis === beforeAfterSelects[1]) {
    clearCarousels();
    carouselWrappers[1].classList.add('active');
  } else if (assignThis === beforeAfterSelects[2]) {
    clearCarousels();
    carouselWrappers[2].classList.add('active');
  } else if (assignThis === beforeAfterSelects[3]) {
    clearCarousels();
    carouselWrappers[3].classList.add('active');
  }
}