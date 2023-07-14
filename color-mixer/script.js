// initialize variables for elements
const red = document.querySelector(".slider-red");
const green = document.querySelector(".slider-green");
const blue = document.querySelector(".slider-blue");
const html = document.querySelector("html");
const sliderContainer = document.querySelector(".slider-container");

const hexValue = document.querySelector(".hexvalue");

sliderContainer.addEventListener("pointermove", function () {
  let redValue = red.value;
  let greenValue = green.value;
  let blueValue = blue.value;
  html.style.setProperty("--value-red", redValue);
  html.style.setProperty("--value-green", greenValue);
  html.style.setProperty("--value-blue", blueValue);
});
