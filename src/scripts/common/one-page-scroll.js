export default function onePageScroll(container) {
  const sections = $(".section"); // все секции по id
  const overlayMenuItems = $(".nav-main__item");
  const duration = 1000;
  let inScroll = false; // блокировка возможности проскролить во время анимации

  // Генерируем точки в навигационном меню
  (function generateDots() {
    sections.each(function(index, section) {
      const item = $("<li>", {
        attr: {
          class: index === 0 ? "nav-fixed__item active" : "nav-fixed__item"
        },
        html: `<a href="#${section.id}" class="nav-fixed__link"></a>`
      });

      $(".nav-fixed__list").append(item);
    });
  })();

  // window.location.hash = "";

  history.pushState("", document.title, window.location.pathname); // При первой загрузке удалит hash чтобы избежать багов
  setActiveItem(window.location.hash);

  // Функция которая принимает hash и выполняет скролл до указаной секции
  function scrollToSection(hash) {
    if (hash) {
      const activeSection = $(sections).filter(".is-active"); // текущяя активная секция
      const newSectionId = $(`section[id='${hash.substring(1)}'`); // секция, в которую хотим перейти
      const translateValue = $(newSectionId).index() - $(activeSection).index();

      $(sections).removeClass("is-active"); // У всех секций удаляет класс is-active
      $(newSectionId).addClass("is-active"); // Ставит кдасс is-active секции в которую перешли

      $(container).css(
        "transition",
        `transform ${duration / 1000}s ease-in-out`
      );
      $(container).css(
        "transform",
        "translateY(" + -100 * translateValue + "%)"
      );
    }
  }

  function setActiveItem(hash, items) {
    // выставление класса active в навигационом меню
    if (window.location.hash) {
      items.forEach(item => {
        const links = $(item)
          .children()
          .attr("class");

        $(item).removeClass("active");
        $(`a.${links}[href$='${hash}']`)
          .parent()
          .addClass("active");
      });
    }
  }

  function handleDelay(hash) {
    setTimeout(() => {
      $(container).css("transition", "none");
      $(container).css("transform", "translateY(0)");

      window.location.hash = hash;
      inScroll = false;
    }, duration);
  }

  $("a").on("click", function(e) {
    const hash = this.hash;
    if (!this.hash) return;
    e.preventDefault();

    if (!inScroll) {
      inScroll = true;
      scrollToSection(hash);
      handleDelay(hash);
    }
  });

  $(".wrapper").on("wheel", e => {
    // Обработчик события по вращанию колесика мыши
    if (!inScroll) {
      inScroll = true;
      const activeSection = $(sections).filter(".is-active"); // текущяя активная секция
      const newSection =
        e.originalEvent.deltaY > 0
          ? $(activeSection).next()
          : $(activeSection).prev();

      if ($(newSection).length > 0) {
        const hash = `#${newSection.attr("id")}`;
        scrollToSection(hash);
        handleDelay(hash);
      } else {
        inScroll = false;
      }
    }
  });

  $(window).on("hashchange", e => {
    const hash = e.originalEvent.newURL.substring(
      e.originalEvent.newURL.indexOf("#")
    ); // Удаляем URL до решетки
    const navItems = $(".nav-fixed__item");
    const newSectionId = $(`section[id='${hash.substring(1)}'`); // находим секцию, в которую хотим перейти

    $(sections).removeClass("is-active"); // У всех секций удаляем класс is-active
    $(newSectionId).addClass("is-active"); // Ставим класс is-active секции в которую перешли

    setActiveItem(hash, [navItems, overlayMenuItems]);
  });
}
