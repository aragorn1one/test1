const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const messageEl = contactForm.querySelector(".form-message");
  const honeypotField = contactForm.querySelector("#website");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (honeypotField && honeypotField.value.trim() !== "") {
      return;
    }

    if (!contactForm.reportValidity()) {
      if (messageEl) {
        messageEl.textContent = "Please complete all required fields.";
        messageEl.classList.add("is-error");
      }
      return;
    }

    if (messageEl) {
      messageEl.textContent = "Grazie! Ti risponderemo presto.";
      messageEl.classList.remove("is-error");
      messageEl.classList.add("is-success");
    }

    contactForm.reset();
  });
}
