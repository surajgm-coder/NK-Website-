<script>
document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll('.nk-slide');
  const dots = document.querySelectorAll('.dot');
  let index = 0;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[i].classList.add('active');
    dots[i].classList.add('active');
    index = i;
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 6000);

});
</script>
