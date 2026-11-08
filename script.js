// script.js - interaksi & validasi form, vanilla JS tanpa dependency.
// Situs ini statis: form tidak dikirim ke backend, validasi hanya di sisi browser.

// Telepon Indonesia: diawali +62/62/0, 8-16 digit, boleh ada spasi/strip.
const PHONE_PATTERN = /^\+?[0-9][0-9\s-]{7,15}$/;

// ---- Input waktu & tanggal: fokus memunculkan picker native,
// blur dengan nilai kosong mengembalikan tipe text agar placeholder kembali terlihat ----
document.querySelectorAll("[data-swap-to]").forEach((input) => {
  const targetType = input.dataset.swapTo;
  input.addEventListener("focus", () => {
    input.type = targetType;
  });
  input.addEventListener("blur", () => {
    if (!input.value) input.type = "text";
  });
});

// ---- Tanggal reservasi: tidak boleh di masa lalu ----
const reservationDate = document.getElementById("reservation-date");
if (reservationDate) {
  const now = new Date();
  const todayLocal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  reservationDate.min = todayLocal;
}

// ---- Nomor telepon: validasi format custom ----
const phoneInput = document.querySelector('#form-booking input[name="telepon"]');
if (phoneInput) {
  const validatePhone = () => {
    const valid = PHONE_PATTERN.test(phoneInput.value.trim());
    phoneInput.setCustomValidity(valid ? "" : "invalid");
  };
  phoneInput.addEventListener("input", validatePhone);
  validatePhone();
}

// ---- Submit form: validasi gaya Bootstrap 5, sukses -> tampilkan alert + kosongkan ----
function wireForm(form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    form.classList.remove("was-validated");
    form.reset();

    const alertEl = form.querySelector(".form-alert");
    if (alertEl) {
      alertEl.classList.remove("d-none");
      alertEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}

["#form-booking", "#form-contact"].forEach((selector) => {
  const form = document.querySelector(selector);
  if (form) wireForm(form);
});
