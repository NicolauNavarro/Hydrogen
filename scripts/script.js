const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  toggle.innerHTML = '<span class="material-symbols-rounded">light_mode</span>';
}

toggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggle.innerHTML =
      '<span class="material-symbols-rounded">dark_mode</span>';
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggle.innerHTML =
      '<span class="material-symbols-rounded">light_mode</span>';
  }
});



const wallistForm = document.querySelector("#wallist-form");
const emailInput = document.querySelector("#email");

wallistForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  //
  // save and email validation goes here
  //
  acceptMailFormAnimation();
});

const airplane = document.querySelector(".check");

function acceptMailFormAnimation() {
  emailInput.value = "";
  emailInput.placeholder = "";
  emailInput.classList.add("accept");

  airplane.addEventListener("animationend", () => {
    emailInput.classList.remove("accept");
    emailInput.placeholder = "Email adress";
  });
}




const body = document.querySelector("body")
document.addEventListener("DOMContentLoaded", () => {
  body.classList.remove("load-state")
})