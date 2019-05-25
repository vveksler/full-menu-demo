// Slider

const slides = document.querySelectorAll("#slider .slider__item");
let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].classList.remove("showing");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("showing");
}

var next = document.getElementById("next");
var previous = document.getElementById("previous");

next.onclick = function() {
  nextSlide();
};
previous.onclick = function() {
  previousSlide();
};