// initialize variables for elements
const red = document.querySelector(".slider-red");
const green = document.querySelector(".slider-green");
const blue = document.querySelector(".slider-blue");
const html = document.querySelector("html");
const sliderContainer = document.querySelector(".slider-container");

const hexValue = document.querySelector(".hexvalue");

sliderContainer.addEventListener("input", function () {
  let redValue = red.value;
  let greenValue = green.value;
  let blueValue = blue.value;
  html.style.setProperty("--value-red", redValue);
  html.style.setProperty("--value-green", greenValue);
  html.style.setProperty("--value-blue", blueValue);

  let hexColor = "#" + convertToHex(redValue, greenValue, blueValue);

  hexValue.innerText = hexColor;

  function valueConvert(rgbValue) {
    rgbValue = parseInt(rgbValue);
    let hex = rgbValue.toString(16);
    console.log(hex);
    while (hex.length < 2) {
      hex = "0" + hex;
    }
    console.log(hex);
    return hex;
  }

  function convertToHex(r, g, b) {
    let value = valueConvert(r) + valueConvert(g) + valueConvert(b);

    return value;
  }
});
