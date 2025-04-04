const toggleButtons = document.querySelectorAll("#toggle-theme");

toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
