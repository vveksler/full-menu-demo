// Slider

const slides = document.querySelectorAll(".slider__item");

(function(slides) {
  let currentSlide = 0;

  function nextSlide() {
    goToSlide(currentSlide + 1);
    setAnimation(currentSlide, "slideInRight");
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
    setAnimation(currentSlide, "slideInLeft");
  }

  function setAnimation(currentSlide, animation) {
    slides[currentSlide].classList.add(animation);
    setTimeout(() => {
      slides[currentSlide].classList.remove(animation);
    }, 1000);
  }

  function goToSlide(n) {
    slides[currentSlide].classList.remove("showing");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("showing");
  }

  var next = document.getElementById("right");
  var previous = document.getElementById("left");

  next.addEventListener("click", function(e) {
    e.preventDefault();
    nextSlide();
  });

  previous.addEventListener("click", function(e) {
    e.preventDefault();
    previousSlide();
  });
})(slides);
