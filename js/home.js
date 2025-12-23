<script>
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".nk-slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  console.log("Slides found:", slides.length); // DEBUG

  setInterval(() => {
    slides[index].classList.remove("active");
    dots[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }, 4000);
});
</script>
