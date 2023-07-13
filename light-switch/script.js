const button = document.querySelector(".lightswitch");
const html = document.querySelector("html");

button.addEventListener("click", function () {
  if (!button.className.includes("lightswitch-dark")) {
    button.className += " lightswitch-dark";
    html.className += " background-dark";
    console.log("light off");
  } else if (button.className.includes("lightswitch-dark")) {
    button.className = button.className.replace(" lightswitch-dark", "");
    html.className = html.className.replace(" background-dark", "");
    console.log("light on");
  }
});
