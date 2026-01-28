const contactForm = document.querySelector("#export-form");
const statusMessage = document.querySelector(".form-status");

if (contactForm && statusMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const honeypot = contactForm.querySelector('input[name="company-field"]');
    if (honeypot && honeypot.value.trim() !== "") {
      return;
    }

    const requiredFields = contactForm.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      if (field.type === "checkbox") {
        if (!field.checked) {
          isValid = false;
          field.focus();
        }
      } else if (!field.value.trim()) {
        isValid = false;
        field.focus();
      }
    });

    if (!isValid) {
      statusMessage.textContent = "Compila tutti i campi obbligatori prima di inviare.";
      return;
    }

    statusMessage.textContent = "Grazie! Ti risponderemo al più presto.";
    contactForm.reset();
  });
}
