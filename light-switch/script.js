const button = document.querySelector(".lightswitch");
const html = document.querySelector("html");

button.addEventListener("click", function () {
  if (!button.className.includes("lightswitch-dark")) {
    console.log("light off");
  } else if (button.className.includes("lightswitch-dark")) {
    console.log("light on");
  }
  button.classList.toggle("lightswitch-dark");
  html.classList.toggle("background-dark");
});
