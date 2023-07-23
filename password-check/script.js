const pwInput1 = document.querySelector("#pw-input-1");
const pwInput2 = document.querySelector("#pw-input-2");
const pwInputContainer = document.querySelector("#pw-input-container");
const btnShowPw = document.querySelector("#btn-show-pw");

let pw1 = "";
let pw2 = "";

btnShowPw.addEventListener("click", function (event) {
  event.preventDefault();
  inputToggle(pwInput1);
  inputToggle(pwInput2);
});

pwInputContainer.addEventListener("input", function () {
  pw1 = pwInput1.value.toString();
  pw2 = pwInput2.value.toString();
  pwEqualCheck();
});

pwInput2.addEventListener("input", function () {
  pw1 = pwInput1.value.toString();
  pw2 = pwInput2.value.toString();
  pwEqualCheck();
});

function inputToggle(pwInput) {
  switch (pwInput.type) {
    case "password":
      pwInput.setAttribute("type", "text");
      break;
    case "text":
      pwInput.setAttribute("type", "password");
      break;
  }
}

function pwEqualCheck() {
  switch (pw1 === pw2) {
    case true:
      document.querySelector("#pw-equal-indicator").innerText = "✅";
      console.log("equal true");
      pwLowerCase();
      pwUpperCase();
      pwLengthCheck();
      pwNumberCheck();
      break;
    case false:
      console.log("equal false");
      pwEqualCheckFailRender();
      break;
    default:
      console.log("equal default");
      pwEqualCheckFailRender();
      break;
  }
}

function pwLowerCase() {
  const lowerCaseCheck = (character) => {
    if (character === character.toLowerCase() && isNaN(character)) {
      return true;
    } else {
      return false;
    }
  };
  switch (pw1.split("").some(lowerCaseCheck)) {
    case true:
      document.querySelector("#pw-lower-case-indicator").innerText = "✅";
      console.log("lower true");
      break;
    case false:
      document.querySelector("#pw-lower-case-indicator").innerText = "❌";
      console.log("lower true");
      break;
    default:
      document.querySelector("#pw-lower-case-indicator").innerText = "❌";
      console.log("lower def");
      break;
  }
}

function pwUpperCase() {
  const upperCaseCheck = (character) => {
    if (character === character.toUpperCase() && isNaN(character)) {
      return true;
    } else {
      return false;
    }
  };
  switch (pw1.split("").some(upperCaseCheck)) {
    case true:
      console.log("upper true");
      document.querySelector("#pw-upper-case-indicator").innerText = "✅";
      break;
    case false:
      console.log("upper false");
      document.querySelector("#pw-upper-case-indicator").innerText = "❌";
      break;

    default:
      console.log("upper false");
      document.querySelector("#pw-upper-case-indicator").innerText = "❌";
      break;
  }
}

function pwNumberCheck() {
  const numberCheck = function (character) {
    if (parseInt(character) * 10 >= 10) {
      return true;
    } else {
      return false;
    }
  };

  switch (pw1.split("").some(numberCheck)) {
    case true:
      console.log("number true");
      document.querySelector("#pw-number-indicator").innerText = "✅";
      break;
    case false:
      console.log("number false");
      document.querySelector("#pw-number-indicator").innerText = "❌";
      break;
    default:
      console.log("number default");
      document.querySelector("#pw-number-indicator").innerText = "❌";
      break;
  }
}

function pwLengthCheck() {
  switch (
    pw1.length >= 10 &&
    pw2.length >= 10 &&
    pw1.length > 0 &&
    pw2.length > 0
  ) {
    case true:
      console.log("length true");
      document.querySelector("#pw-10-characters-indicator").innerText = "✅";
      break;
    case false:
      console.log("length false");
      document.querySelector("#pw-10-characters-indicator").innerText = "❌";
      break;
    default:
      console.log("length default");
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

/*
function trueOrFalse(boolean, string) {
  switch (boolean) {
    case true:
      document.querySelector(string).innerText = "✅";
      break;
    case false:
      document.querySelector(string).innerText = "❌";
      break;
    default:
      document.querySelector(string).innerText = "❌";
      break;
  }
}
*/
