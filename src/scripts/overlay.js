const sectionModal = document.querySelector(".modal");

(function(modal) {
  const template = document.querySelector("#overlayTemplate").innerHTML;
  const overlay = createOverlay(template);

  modal.addEventListener("click", e => {
    e.preventDefault();

    const target = e.target;

    if (target.classList.contains("modal__btn")) {
      const content = target.textContent;

      overlay.open();
      overlay.setContent("Какой то заголовок", content);
    }
  });
})(sectionModal);

function createOverlay(template) {
  let fragment = document.createElement("div");

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".overlay");
  const title = fragment.querySelector(".overlay__title");
  const text = fragment.querySelector(".overlay__text");
  const closeElement = fragment.querySelector(".overlay__close");
  const body = document.body;

  fragment = null;

  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });

  closeElement.addEventListener("click", e => {
    body.removeChild(overlayElement);
    body.classList.remove("hidden");
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
      body.classList.add("hidden");
    },
    close() {
      closeElement.click();
    },
    setContent(_title, _text) {
      title.innerHTML = _title;
      text.innerHTML = _text;
    }
  };
}
