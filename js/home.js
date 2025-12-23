window.addEventListener("load", function () {

  const slides = document.querySelectorAll(".nk-slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;
  let timer;

  if (!slides.length) return;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
  }

  function startSlider() {
    timer = setInterval(() => {
      showSlide((index + 1) % slides.length);
    }, 6000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      clearInterval(timer);
      showSlide(i);
      startSlider();
    });
  });

  showSlide(0);
  startSlider();
});
