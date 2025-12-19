document.addEventListener("DOMContentLoaded", function () {

  const swiper = new Swiper(".hero-slider", {
    loop: true,
    speed: 1200,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    effect: "slide",
  });

});
