const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header_nav');
const navlinks = document.querySelectorAll('.header_nav a');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  overlay.classList.toggle('is-active', isOpen);
  document.body.classList.toggle('is-fixed', isOpen);
});

navlinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-active');
    document.body.classList.remove('is-fixed');
  });
});

// overlay クリックでも閉じる
overlay.addEventListener('click', () => {
  nav.classList.remove('is-open');
  overlay.classList.remove('is-active');
  document.body.classList.remove('is-fixed');
});