// Year auto-update
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form simulation
const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");
const error = document.getElementById("formError");

form.addEventListener("submit", e => {
  e.preventDefault();
  success.classList.add("d-none");
  error.classList.add("d-none");

  // Fake success delay for demo
  setTimeout(() => {
    success.classList.remove("d-none");
    form.reset();
  }, 800);
});
