// initialize variables for DOM elements
const red = document.querySelector(".slider-red");
const green = document.querySelector(".slider-green");
const blue = document.querySelector(".slider-blue");
const html = document.querySelector("html");
const sliderContainer = document.querySelector(".slider-container");
const hexValue = document.querySelector(".hexvalue");

// add event listener to slider area
sliderContainer.addEventListener("input", function () {
  // get current value of sliders
  let redValue = red.value;
  let greenValue = green.value;
  let blueValue = blue.value;
  // save each current color value in corresponding custom property
  html.style.setProperty("--value-red", redValue);
  html.style.setProperty("--value-green", greenValue);
  html.style.setProperty("--value-blue", blueValue);

  // convert rgb-values to hex and assign the hex-value to the hex-value paragraph
  let hexColor = "#" + convertToHex(redValue, greenValue, blueValue);
  hexValue.innerText = hexColor;

  // function to combine singular color channel values to one hexvalue
  function convertToHex(r, g, b) {
    let value = valueConvert(r) + valueConvert(g) + valueConvert(b);
    return value;
  }

  // function to convert single color channel value to corresponding hex-value
  function valueConvert(rgbValue) {
    rgbValue = parseInt(rgbValue);
    let hex = rgbValue.toString(16);
    while (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }
});
