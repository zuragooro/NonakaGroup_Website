const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("headerNav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});
