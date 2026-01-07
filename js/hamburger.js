const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header_nav');
const navLinks = document.querySelectorAll('.header_nav a');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('is-open');
  hamburger.classList.toggle('is-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    hamburger.classList.remove('is-open');
  });
});
