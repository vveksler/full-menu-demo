// Slider slideshow

export default function slideshow(slides) {
  var slideIndex = 1;
  const dots = document.querySelectorAll(".slideshow__dot");

  showSlides(slideIndex);

  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  [prev, next].forEach(element => {
    element.addEventListener("click", e => {
      if (e.target === prev) {
        plusSlides(-1);
      } else if (e.target === next) {
        plusSlides(1);
      }
    });
  });

  dots.forEach((item, index) => {
    item.addEventListener("click", e => {
      currentSlide(index + 1);
    });
  });

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}