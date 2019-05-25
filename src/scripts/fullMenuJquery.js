// Full menu in jQuery

const overlay = $("#hamburgerOverlay");
const menu = $("#hamburgerMenu");
const body = $("body");
const link = $(".nav-main__link");
const classes = ["open", "active", "hidden"];
const elements = [menu, overlay, body];

const _toggleClass = (element, className) => {
  element.forEach((item, index) => $(item).toggleClass(className[index]));
};

$(menu).on("click", e => {
  e.preventDefault();

  _toggleClass(elements, classes);
});

$(link).on("click", function(e) {
  e.preventDefault();
  const scroll_el = $(this).attr("href");

  if ($(scroll_el).length > 0) {
    $("html").animate({ scrollTop: $(scroll_el).offset().top }, 600, () => {
      _toggleClass(elements, classes);
    });
  }
});
