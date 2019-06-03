/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/common/Slider-JS.js":
/*!*****************************************!*\
  !*** ./src/scripts/common/Slider-JS.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = name;\nfunction name(container) {\n  var sliderList = container.querySelector(\".slider__list\");\n  var sliderItems = sliderList.querySelectorAll(\".slider__item\");\n\n  var prevBtn = container.querySelector(\".arrow__left\");\n  var nextBtn = container.querySelector(\".arrow__right\");\n  var counter = 1;\n\n  animateSlide(); // Выставляем начальный transform: translate..\n\n  [\"first\", \"last\"].forEach(function (side) {\n    return createClone(side);\n  }); // Создаем клоны в начале и конце списка\n  sliderItems = sliderList.querySelectorAll(\".slider__item\");\n\n  function createClone(side) {\n    var cloneElement = document.createElement(\"li\");\n\n    cloneElement.classList.add(\"slider__item\");\n    cloneElement.id = side + \"Clone\";\n\n    if (side === \"first\") {\n      cloneElement.innerHTML = sliderItems[sliderItems.length - 1].innerHTML;\n      sliderList.insertBefore(cloneElement, sliderList.firstChild);\n    }\n\n    if (side === \"last\") {\n      cloneElement.innerHTML = sliderItems[0].innerHTML;\n      sliderList.appendChild(cloneElement);\n    }\n\n    cloneElement = null; // Чтобы почистить\n  }\n\n  function animateSlide() {\n    var transition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    // Если передает \"transition\", то также на элемент вешается transition\n    sliderList.style.transform = \"translateX(\" + -100 * counter + \"%)\";\n    transition ? sliderList.style.transition = \"transform 1s ease-in-out\" : sliderList.style.transition = \"none\";\n  }\n\n  prevBtn.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    if (counter <= 0) return;\n    counter--;\n    animateSlide(\"transition\");\n  });\n\n  nextBtn.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    if (counter >= sliderItems.length - 1) return;\n    counter++;\n    animateSlide(\"transition\");\n  });\n\n  sliderList.addEventListener(\"transitionend\", function () {\n    // Событие, которое происходит после срабатывания transition\n    if (sliderItems[counter].id === \"lastClone\") {\n      counter = sliderItems.length - counter; // Обновляетя counter и происходит сдвиг при помощи transform без анимации(незаметно)\n      animateSlide();\n    }\n\n    if (sliderItems[counter].id === \"firstClone\") {\n      counter = sliderItems.length - 2;\n      animateSlide();\n    }\n  });\n\n  // touch - на мобильных устройствах есть событий при нажатии пальцем на экран, мы их обрабатыванием, и делаем прокрутку слайдов\n  var touch = 0;\n\n  sliderList.addEventListener(\"touchstart\", function (e) {\n    var touchObj = e.changedTouches[0];\n    touch = touchObj.clientX;\n  });\n\n  sliderList.addEventListener(\"touchend\", function (e) {\n    var touchObj = e.changedTouches[0];\n\n    if (touch + 30 < touchObj.clientX) animateSlide(counter--);\n    if (touch - 30 > touchObj.clientX) animateSlide(counter++);\n  });\n}\n\n//# sourceURL=webpack:///./src/scripts/common/Slider-JS.js?");

/***/ }),

/***/ "./src/scripts/common/Slider-animate.js":
/*!**********************************************!*\
  !*** ./src/scripts/common/Slider-animate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (slides) {\n  var currentSlide = 0;\n  var next = document.getElementById(\"right\");\n  var previous = document.getElementById(\"left\");\n  var duration = 1000;\n\n  next.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    nextSlide();\n  });\n\n  previous.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    previousSlide();\n  });\n\n  function nextSlide() {\n    goToSlide(currentSlide + 1);\n    setAnimation(currentSlide, \"slideInRight\", duration);\n  }\n\n  function previousSlide() {\n    goToSlide(currentSlide - 1);\n    setAnimation(currentSlide, \"slideInLeft\", duration);\n  }\n\n  function setAnimation(currentSlide, animation, duration) {\n    slides[currentSlide].classList.add(animation);\n    setTimeout(function () {\n      slides[currentSlide].classList.remove(animation);\n    }, duration);\n  }\n\n  function goToSlide(n) {\n    slides[currentSlide].classList.remove(\"showing\");\n    currentSlide = (n + slides.length) % slides.length;\n    slides[currentSlide].classList.add(\"showing\");\n  }\n};\n\n; // Slider with animate css\n\n//# sourceURL=webpack:///./src/scripts/common/Slider-animate.js?");

/***/ }),

/***/ "./src/scripts/common/Slideshow.js":
/*!*****************************************!*\
  !*** ./src/scripts/common/Slideshow.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = slideshow;\n// Slider slideshow\n\nfunction slideshow(slides) {\n  var slideIndex = 1;\n  var dots = document.querySelectorAll(\".slideshow__dot\");\n\n  showSlides(slideIndex);\n\n  var prev = document.querySelector(\".prev\");\n  var next = document.querySelector(\".next\");\n\n  [prev, next].forEach(function (element) {\n    element.addEventListener(\"click\", function (e) {\n      if (e.target === prev) {\n        plusSlides(-1);\n      } else if (e.target === next) {\n        plusSlides(1);\n      }\n    });\n  });\n\n  dots.forEach(function (item, index) {\n    item.addEventListener(\"click\", function (e) {\n      currentSlide(index + 1);\n    });\n  });\n\n  // Next/previous controls\n  function plusSlides(n) {\n    showSlides(slideIndex += n);\n  }\n\n  // Thumbnail image controls\n  function currentSlide(n) {\n    showSlides(slideIndex = n);\n  }\n\n  function showSlides(n) {\n    var i = void 0;\n\n    if (n > slides.length) {\n      slideIndex = 1;\n    }\n    if (n < 1) {\n      slideIndex = slides.length;\n    }\n    for (i = 0; i < slides.length; i++) {\n      slides[i].classList.remove(\"active\");\n    }\n    for (i = 0; i < dots.length; i++) {\n      dots[i].className = dots[i].className.replace(\" active\", \"\");\n    }\n\n    slides[slideIndex - 1].classList.add(\"active\");\n    dots[slideIndex - 1].className += \" active\";\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/common/Slideshow.js?");

/***/ }),

/***/ "./src/scripts/common/fullMenu-AnonymFunction.js":
/*!*******************************************************!*\
  !*** ./src/scripts/common/fullMenu-AnonymFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// анонимная самовызывающаяся функция\n\nvar obj = {\n  overlay: \"#hamburgerOverlay\",\n  menu: \"#hamburgerMenu\"\n};\n\nvar fullMenu = function (_ref) {\n  var _ref$overlay = _ref.overlay,\n      o = _ref$overlay === undefined ? \"#hamburgerOverlay\" : _ref$overlay,\n      _ref$menu = _ref.menu,\n      m = _ref$menu === undefined ? \"#hamburgerMenu\" : _ref$menu;\n\n  var body = document.querySelector(\"body\");\n  var overlay = document.querySelector(o);\n  var menu = document.querySelector(m);\n  var classes = [\"open\", \"active\", \"hidden\"];\n  var elements = [menu, overlay, body];\n\n  var _toggleClass = function _toggleClass(element, className) {\n    element.forEach(function (item, index) {\n      return $(item).toggleClass(className[index]);\n    });\n  };\n\n  var handleListeners = function handleListeners() {\n    menu.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      _toggleClass(elements, classes);\n    });\n\n    overlay.addEventListener(\"click\", function (e) {\n      var target = e.target;\n\n      if (target.classList.contains(\"nav-main__link\")) {\n        var scroll_el = target.getAttribute(\"href\");\n\n        $(\"html\").animate({ scrollTop: $(scroll_el).offset().top }, 600, function () {\n          _toggleClass(elements, classes);\n        });\n      }\n    });\n  };\n\n  return {\n    toggle: handleListeners\n  };\n}(obj);\n\nexports.default = fullMenu;\n\n//# sourceURL=webpack:///./src/scripts/common/fullMenu-AnonymFunction.js?");

/***/ }),

/***/ "./src/scripts/common/modal.js":
/*!*************************************!*\
  !*** ./src/scripts/common/modal.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (modal, overlay) {\n  modal.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n\n    var target = e.target;\n\n    if (target.classList.contains(\"modal__btn\")) {\n      var content = target.textContent;\n\n      overlay.open();\n      overlay.setContent(content, \"Сообщение модального окна:\");\n    }\n  });\n};\n\n;\n\n//# sourceURL=webpack:///./src/scripts/common/modal.js?");

/***/ }),

/***/ "./src/scripts/common/overlay.js":
/*!***************************************!*\
  !*** ./src/scripts/common/overlay.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = createOverlay;\nfunction createOverlay(template) {\n  var fragment = document.createElement(\"div\");\n\n  fragment.innerHTML = template;\n\n  var overlayElement = fragment.querySelector(\".overlay\");\n  var title = fragment.querySelector(\".overlay__title\");\n  var text = fragment.querySelector(\".overlay__text\");\n  var closeElement = fragment.querySelector(\".overlay__close\");\n\n  fragment = null;\n\n  overlayElement.addEventListener(\"click\", function (e) {\n    if (e.target === overlayElement) {\n      closeElement.click();\n    }\n  });\n\n  closeElement.addEventListener(\"click\", function () {\n    document.body.removeChild(overlayElement);\n    $(\"body\").attr(\"style\", \"overflow: visible\");\n  });\n\n  return {\n    open: function open() {\n      document.body.appendChild(overlayElement);\n      $(\"body\").attr(\"style\", \"overflow: hidden\");\n    },\n    close: function close() {\n      closeElement.click();\n    },\n    setContent: function setContent(customText, customTitle) {\n      if (customTitle) title.innerHTML = customTitle;\n      text.innerHTML = customText;\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/scripts/common/overlay.js?");

/***/ }),

/***/ "./src/scripts/common/submit-form.js":
/*!*******************************************!*\
  !*** ./src/scripts/common/submit-form.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = submitForm;\n// SUBMIT FORM\n\nfunction submitForm(form, overlay) {\n  form.addEventListener(\"submit\", submitForm);\n\n  function submitForm(e) {\n    e.preventDefault();\n    var form = e.target;\n    var request = ajaxForm(form);\n\n    request.addEventListener(\"load\", function () {\n      console.log(request);\n      if (request.status >= 400) {\n        overlay.open();\n        overlay.setContent(\"\\u041F\\u0440\\u043E\\u0438\\u0437\\u043E\\u0448\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430 \" + request.response.message);\n      } else {\n        overlay.open();\n        overlay.setContent(request.response.message);\n      }\n    });\n  }\n\n  var ajaxForm = function ajaxForm(form) {\n    var formData = new FormData(form);\n    var url = \"https://webdev-api.loftschool.com/sendmail\";\n    var mail = \"vadim.veksler@intel.com\";\n    formData.append(\"to\", mail);\n\n    var xhr = new XMLHttpRequest();\n    xhr.responseType = \"json\";\n    xhr.open(\"POST\", url);\n    xhr.setRequestHeader(\"X-Requested-With\", \"XMLHttpRequest\");\n    xhr.send(formData);\n\n    return xhr;\n  };\n}\n\n//# sourceURL=webpack:///./src/scripts/common/submit-form.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _fullMenuAnonymFunction = __webpack_require__(/*! ./common/fullMenu-AnonymFunction */ \"./src/scripts/common/fullMenu-AnonymFunction.js\");\n\nvar _fullMenuAnonymFunction2 = _interopRequireDefault(_fullMenuAnonymFunction);\n\nvar _SliderAnimate = __webpack_require__(/*! ./common/Slider-animate */ \"./src/scripts/common/Slider-animate.js\");\n\nvar _SliderAnimate2 = _interopRequireDefault(_SliderAnimate);\n\nvar _Slideshow = __webpack_require__(/*! ./common/Slideshow */ \"./src/scripts/common/Slideshow.js\");\n\nvar _Slideshow2 = _interopRequireDefault(_Slideshow);\n\nvar _SliderJS = __webpack_require__(/*! ./common/Slider-JS */ \"./src/scripts/common/Slider-JS.js\");\n\nvar _SliderJS2 = _interopRequireDefault(_SliderJS);\n\nvar _modal = __webpack_require__(/*! ./common/modal */ \"./src/scripts/common/modal.js\");\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nvar _overlay = __webpack_require__(/*! ./common/overlay */ \"./src/scripts/common/overlay.js\");\n\nvar _overlay2 = _interopRequireDefault(_overlay);\n\nvar _submitForm = __webpack_require__(/*! ./common/submit-form */ \"./src/scripts/common/submit-form.js\");\n\nvar _submitForm2 = _interopRequireDefault(_submitForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//document.addEventListener(\"DOMContentLoaded\", fullMenuPureJs); // Запустить функцию после полной загрузки документа на JS\n//$(document).ready(fullMenuJquery); // Запустить функцию после полной загрузки документа на jQuery\n_fullMenuAnonymFunction2.default.toggle();\n\n/* SLIDERS */\n/* FULL MENU */\n//// 3 разных способа сделать Full Menu, необходимо выбрать одни из вариантов\n\n//import fullMenuPureJs from \"./common/fullMenu-pureJS\";\n//import fullMenuJquery from \"./common/fullMenu-jQuery\";\n\n\nvar sliderAnimateItems = document.querySelectorAll(\"#slider-animate .slider__item\"); // Нахожу все элементы в секции с id slider-animate\nif (sliderAnimateItems.length) (0, _SliderAnimate2.default)(sliderAnimateItems);\n\nvar sliderSlidshowItems = document.querySelectorAll(\"#slideshow .slideshow__item\");\nif (sliderSlidshowItems.length) (0, _Slideshow2.default)(sliderSlidshowItems);\n\nvar sliderVanillaJSContainer = document.querySelector(\"#slider-vanillaJS\");\n\nif (sliderVanillaJSContainer) (0, _SliderJS2.default)(sliderVanillaJSContainer);\n\n/* OVERLAY */\n\n\nvar template = document.querySelector(\"#overlayTemplate\").innerHTML;\nvar overlay = (0, _overlay2.default)(template);\n\nvar sectionModal = document.querySelector(\"#modal\");\nif (sectionModal) (0, _modal2.default)(sectionModal, overlay);\n\n/* SUBMIT FORM EXAMPLE */\n\n\nvar form = document.querySelector(\"#submit-form\"); // Получение формы\nif (form) (0, _submitForm2.default)(form, overlay); // Если на странице есть нужный элемент, то выполнить функцию и передать ей форму и overlay\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ })

/******/ });