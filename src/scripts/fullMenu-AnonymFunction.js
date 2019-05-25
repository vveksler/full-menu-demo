// анонимная самовызывающаяся функция

const fullMenu = (function(params) {
  const body = document.querySelector("body");
  const overlay = document.querySelector(params.overlay);
  const menu = document.querySelector(params.menu);
  const classes = ["open", "active", "hidden"];
  const elements = [menu, overlay, body];

  const _toggleClass = (element, className) => {
    element.forEach((item, index) => $(item).toggleClass(className[index]));
  };

  const handleListeners = function() {
    menu.addEventListener("click", e => {
      e.preventDefault();

      _toggleClass(elements, classes);
    });

    overlay.addEventListener("click", function(e) {
      const target = e.target;

      if (target.classList.contains("nav-main__link")) {
        const scroll_el = target.getAttribute("href");

        $("html").animate({ scrollTop: $(scroll_el).offset().top }, 600, () => {
          _toggleClass(elements, classes);
        });
      }
    });
  };

  return {
    toggle: handleListeners
  };
})({
  overlay: "#hamburgerOverlay",
  menu: "#hamburgerMenu"
});

fullMenu.toggle();
