const inputField = document.querySelector(".password-input");
const pwButton = document.querySelector("button");

pwButton.addEventListener("click", function () {
  event.preventDefault();
  if (inputField.type === "text") {
    inputField.setAttribute("type", "password");
    pwButton.innerText = "Show Password";
  } else if (inputField.type === "password") {
    inputField.setAttribute("type", "text");
    pwButton.innerText = "Hide Password";
  }
});
