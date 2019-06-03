export default function createOverlay(template) {
  let fragment = document.createElement("div");

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".overlay");
  const title = fragment.querySelector(".overlay__title");
  const text = fragment.querySelector(".overlay__text");
  const closeElement = fragment.querySelector(".overlay__close");

  fragment = null;

  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });

  closeElement.addEventListener("click", () => {
    document.body.removeChild(overlayElement);
    $("body").attr("style", "overflow: visible");
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
      $("body").attr("style", "overflow: hidden");
    },
    close() {
      closeElement.click();
    },
    setContent(customText, customTitle) {
      if (customTitle) title.innerHTML = customTitle;
      text.innerHTML = customText;
    }
  };
}
