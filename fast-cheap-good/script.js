// initialize variables for DOM-elements
const main = document.querySelector("main");

const fastCheck = document.querySelector(".fast-check");
const cheapCheck = document.querySelector(".cheap-check");
const goodCheck = document.querySelector(".good-check");

const fastLabel = document.querySelector(".fast-label");
const cheapLabel = document.querySelector(".cheap-label");
const goodLabel = document.querySelector(".good-label");

// initialize eventArray to save info about which boxes have been checked
const eventArray = [];

main.addEventListener("click", function (event) {
  // initialize an array for the state of the checkboxes
  let checkedArray = [false, false, false];
  // save states of checkboxes in checkedArray
  if (fastCheck.checked === true) {
    checkedArray[0] = true;
  }
  if (cheapCheck.checked === true) {
    checkedArray[1] = true;
  }
  if (goodCheck.checked === true) {
    checkedArray[2] = true;
  }

  // if checkedArray states that all boxes are checked, uncheck the box that has been checked second last
  if (!checkedArray.some((value) => value === false)) {
    if (eventArray[0] === "fast") {
      fastCheck.checked = false;
    }
    if (eventArray[0] === "cheap") {
      cheapCheck.checked = false;
    }
    if (eventArray[0] === "good") {
      goodCheck.checked = false;
    }
  }

  // save classname of last checked box in eventArray
  if (event.target.type === "checkbox") {
    eventArray.unshift(event.target.classList[1]);
  }
});
