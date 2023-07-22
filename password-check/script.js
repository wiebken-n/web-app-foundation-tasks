const pwInput1 = document.querySelector("#pw-input-1");
const pwInput2 = document.querySelector("#pw-input-2");
const btnShowPw = document.querySelector("#btn-show-pw");

btnShowPw.addEventListener("click", function (event) {
  event.preventDefault();
  switch (pwInput1.type) {
    case "password":
      pwInput1.setAttribute("type", "text");
      break;
    case "text":
      pwInput1.setAttribute("type", "password");
      break;
  }
  switch (pwInput2.type) {
    case "password":
      pwInput2.setAttribute("type", "text");
      break;
    case "text":
      pwInput2.setAttribute("type", "password");
      break;
  }
});

pwInput1.addEventListener("input", function () {
  pwEqualCheck();
});

pwInput2.addEventListener("input", function () {
  pwEqualCheck();
});

function pwEqualCheck() {
  switch (pwInput1.value === pwInput2.value) {
    case true:
      document.querySelector("#pw-equal-indicator").innerText = "✅";
      pwLowerCase();
      pwUpperCase();
      pwLengthCheck();
      pwNumberCheck();
      break;
    case false:
      pwEqualCheckFailRender();
      document.querySelector("#pw-equal-indicator").innerText = "❌";
      break;
    default:
      pwEqualCheckFailRender();
      document.querySelector("#pw-equal-indicator").innerText = "❌";
      break;
  }
}

function pwLowerCase() {
  const lowerCaseCheck = (character) => character === character.toLowerCase();
  switch (pwInput1.value.split("").some(lowerCaseCheck)) {
    case true:
      document.querySelector("#pw-lower-case-indicator").innerText = "✅";
      break;
    case false:
      document.querySelector("#pw-lower-case-indicator").innerText = "❌";
      break;
    default:
      document.querySelector("#pw-lower-case-indicator").innerText = "❌";
      break;
  }
}

function pwUpperCase() {
  const upperCaseCheck = (character) => character === character.toUpperCase();
  switch (pwInput1.value.split("").some(upperCaseCheck)) {
    case true:
      document.querySelector("#pw-upper-case-indicator").innerText = "✅";
      break;
    case false:
      document.querySelector("#pw-upper-case-indicator").innerText = "❌";
      break;
    default:
      document.querySelector("#pw-upper-case-indicator").innerText = "❌";
      break;
  }
}

function pwNumberCheck() {
  const numberCheck = function (character) {
    return !isNaN(character);
  };
  console.log(pwInput1.value.split("").some(numberCheck));
  switch (pwInput1.value.split("").some(numberCheck)) {
    case true:
      document.querySelector("#pw-number-indicator").innerText = "✅";
      break;
    case false:
      document.querySelector("#pw-number-indicator").innerText = "❌";
      break;
    default:
      document.querySelector("#pw-number-indicator").innerText = "❌";
      break;
  }
}

function pwLengthCheck() {
  switch (pwInput1.value.length >= 10 && pwInput1.value.length >= 10) {
    case true:
      document.querySelector("#pw-10-characters-indicator").innerText = "✅";
      break;
    case false:
      document.querySelector("#pw-10-characters-indicator").innerText = "❌";
      break;
    default:
      document.querySelector("#pw-10-characters-indicator").innerText = "❌";
      break;
  }
}

function pwEqualCheckFailRender() {
  document.querySelector("#pw-equal-indicator").innerText = "❌";
  document.querySelector("#pw-lower-case-indicator").innerText = "❌";
  document.querySelector("#pw-upper-case-indicator").innerText = "❌";
  document.querySelector("#pw-number-indicator").innerText = "❌";
  document.querySelector("#pw-10-characters-indicator").innerText = "❌";
}
