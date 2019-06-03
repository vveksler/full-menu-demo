

export default function(modal, overlay) {
  modal.addEventListener("click", e => {
    e.preventDefault();

    const target = e.target;

    if (target.classList.contains("modal__btn")) {
      const content = target.textContent;

      overlay.open();
      overlay.setContent(content, "Сообщение модального окна:");
    }
  });
};
