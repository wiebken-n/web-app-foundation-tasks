// initialize variables for elements
const counterArea = document.querySelector(".counter");
const counterText = document.querySelector(".count");
const resetButton = document.querySelector(".reset-button");
const html = document.querySelector("html");

// initialize variables for counter numbers
let count = 0;
let countShown = 0;

// execute countUp function if bottom area is clicked
counterArea.addEventListener("click", function () {
  countUp();
});
// execute countUp function if space is used
window.addEventListener("keyup", function (event) {
  if (event.code === "Space" || event.code === "Enter") {
    countUp();
  }
});

// reset counters and thus reset css-value if reset button is clicked
resetButton.addEventListener("click", function () {
  count = 0;
  countShown = 0;
  html.style.setProperty("--count-value", count + "%");
  counterText.innerText = countShown;
});

// increment counters and adjust css value accordingly
const countUp = function () {
  if (count > 99) {
    count = 0;
  }
  count++;
  countShown++;
  html.style.setProperty("--count-value", count + "%");
  counterText.innerText = countShown;
};
