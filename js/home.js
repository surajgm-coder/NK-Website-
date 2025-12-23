<script>
(function () {

  let slides = [];
  let dots = [];
  let index = 0;
  let sliderTimer = null;

  function initHeroSlider() {
    slides = document.querySelectorAll(".nk-slide");
    dots   = document.querySelectorAll(".dot");

    if (!slides.length || !dots.length) {
      console.error("Hero slider not initialized: slides or dots missing");
      return;
    }

    // Reset all
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    // Force first slide active
    slides[0].classList.add("active");
    dots[0].classList.add("active");
    index = 0;

    startSlider();
  }

  function startSlider() {
    stopSlider(); // prevent duplicate intervals

    sliderTimer = setInterval(() => {
      slides[index].classList.remove("active");
      dots[index].classList.remove("active");

      index = (index + 1) % slides.length;

      slides[index].classList.add("active");
      dots[index].classList.add("active");
    }, 5000); // 5 seconds (premium timing)
  }

  function stopSlider() {
    if (sliderTimer) {
      clearInterval(sliderTimer);
      sliderTimer = null;
    }
  }

  // Wait for full page load (HTML + images)
  window.addEventListener("load", initHeroSlider);

})();
</script>
