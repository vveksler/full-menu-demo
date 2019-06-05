/* FULL MENU */
//// 3 разных способа сделать Full Menu, необходимо выбрать одни из вариантов

//import fullMenuPureJs from "./common/fullMenu-pureJS";
//import fullMenuJquery from "./common/fullMenu-jQuery";
import fullMenuAnonymFunction from "./common/fullMenu-AnonymFunction";

//document.addEventListener("DOMContentLoaded", fullMenuPureJs); // Запустить функцию после полной загрузки документа на JS
//$(document).ready(fullMenuJquery); // Запустить функцию после полной загрузки документа на jQuery
fullMenuAnonymFunction.toggle();

/* SLIDERS */
import sliderAnimate from "./common/Slider-animate";
import sliderSlideshow from "./common/Slideshow";
import sliderVanillaJS from "./common/Slider-JS";

const sliderAnimateItems = document.querySelectorAll(
  "#slider-animate .slider__item"
); // Нахожу все элементы в секции с id slider-animate
if (sliderAnimateItems.length) sliderAnimate(sliderAnimateItems);

const sliderSlidshowItems = document.querySelectorAll(
  "#slideshow .slideshow__item"
);
if (sliderSlidshowItems.length) sliderSlideshow(sliderSlidshowItems);

const sliderVanillaJSContainer = document.querySelector("#slider-vanillaJS");

if (sliderVanillaJSContainer) sliderVanillaJS(sliderVanillaJSContainer);

/* OVERLAY */
import modalWindow from "./common/modal";
import createOverlay from "./common/overlay";

const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

const sectionModal = document.querySelector("#modal");
if (sectionModal) modalWindow(sectionModal, overlay);

/* SUBMIT FORM EXAMPLE */
import submitForm from "./common/submit-form";

const form = document.querySelector("#submit-form"); // Получение формы
if(form) submitForm(form, overlay); // Если на странице есть нужный элемент, то выполнить функцию и передать ей форму и overlay

/** One Page Scroll */
import onePageScroll from "./common/one-page-scroll";

const container = $(".one-page-scroll");
if ($(container).length > 0) onePageScroll(container); 