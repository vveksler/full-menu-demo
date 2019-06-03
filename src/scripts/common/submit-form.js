// SUBMIT FORM

export default function submitForm(form, overlay) {
  form.addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    let request = ajaxForm(form);

    request.addEventListener("load", function() {
      console.log(request);
      if (request.status >= 400) {
        overlay.open();
        overlay.setContent(`Произошла ошибка ${request.response.message}`);
      } else {
        overlay.open();
        overlay.setContent(request.response.message);
      }
    });
  }

  const ajaxForm = function(form) {
    const formData = new FormData(form);
    const url = "https://webdev-api.loftschool.com/sendmail";
    const mail = "vadim.veksler@intel.com";
    formData.append("to", mail);

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", url);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(formData);

    return xhr;
  };
}
