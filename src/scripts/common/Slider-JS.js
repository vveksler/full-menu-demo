export default function name(container) {
const sliderList = container.querySelector(".slider__list");
let sliderItems = sliderList.querySelectorAll(".slider__item");

const prevBtn = container.querySelector(".arrow__left");
const nextBtn = container.querySelector(".arrow__right");
let counter = 1;

sliderList.style.transform = "translateX(" + -100 * counter + "%)";

["first", "last"].forEach(side => createClone(side));
sliderItems = sliderList.querySelectorAll(".slider__item");

function createClone(side) {
  let cloneElement = document.createElement("li");

  cloneElement.classList.add("slider__item");
  cloneElement.id = `${side}Clone`;

  if (side === "first") {
    cloneElement.innerHTML = sliderItems[sliderItems.length - 1].innerHTML;
    sliderList.insertBefore(cloneElement, sliderList.firstChild);
    cloneElement = null;
  }

  if (side === "last") {
    cloneElement.innerHTML = sliderItems[0].innerHTML;
    sliderList.appendChild(cloneElement);
    cloneElement = null;
  }
}

function animateSlide(transition = false) {
  sliderList.style.transform = "translateX(" + -100 * counter + "%)";
  transition
    ? (sliderList.style.transition = "transform 1s ease-in-out")
    : (sliderList.style.transition = "none");
}

prevBtn.addEventListener("click", e => {
  e.preventDefault();
  if (counter <= 0) return;
  counter--;
  animateSlide("transition");
});

nextBtn.addEventListener("click", e => {
  e.preventDefault();
  if (counter >= sliderItems.length - 1) return;
  counter++;
  animateSlide("transition");
});

sliderList.addEventListener("transitionend", e => {
  if (sliderItems[counter].id === "lastClone") {
    counter = sliderItems.length - counter;
    animateSlide();
  }

  if (sliderItems[counter].id === "firstClone") {
    counter = sliderItems.length - 2;
    animateSlide();
  }
});

}