const inputField = document.querySelector(".password-input");
const pwButton = document.querySelector(".button-show-pw");

pwButton.addEventListener("click", function () {
  event.preventDefault();
  if (inputField.type === "text") {
    inputField.setAttribute("type", "password");
    pwButton.setAttribute("value", "Show Password");
  } else if (inputField.type === "password") {
    inputField.setAttribute("type", "text");
    pwButton.setAttribute("value", "Hide Password");
  }
});
