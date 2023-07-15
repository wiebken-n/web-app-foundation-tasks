const button = document.querySelector(".lightswitch");
const body = document.querySelector("body");
const title = document.querySelector("title");

button.addEventListener("click", function () {
  if (!button.className.includes("lightswitch-dark")) {
    title.innerText = "Good Night";
  } else if (button.className.includes("lightswitch-dark")) {
    title.innerText = "Good Morning";
  }
  button.classList.toggle("lightswitch-dark");
  body.classList.toggle("background-dark");
});
