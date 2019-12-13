// collect all DOM elements
// buttons
const eraseButtons = document.querySelectorAll('.erase--btn');
//content blocks
const contentBlocks = document.querySelectorAll('.content');
//dots
const dots = document.querySelectorAll('.dot');

// functions
// Show correct content
const contentShow = (target) => {
  const btn = target;
  contentBlocks.forEach((block) => {
    if (!block.classList.contains(target)) {
      block.classList.remove('active');
      return false;
    } else {
      block.classList.add('active');
    }
  });
  dots.forEach((dot) => {
    if (!dot.classList.contains(target)) {
      dot.classList.remove('active');
      return false;
    } else {
      dot.classList.add('active');
    }
  });
  eraseButtons.forEach((btn) => {
    if (!btn.classList.contains(target)) {
      btn.classList.remove('active');
      return false;
    } else {
      btn.classList.add('active');
    }
  });
}

// event listeners
eraseButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const target = e.target;
    contentShow(target.id);
  });
});
dots.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    const target = e.target;
    contentShow(target.dataset.val);
  });
});