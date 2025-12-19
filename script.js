document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000); // change slide every 5 seconds
});
// MOBILE MENU
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
let slides = document.querySelectorAll(".hero-slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);
