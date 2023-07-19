// initialize variables for DOM elements
const red = document.querySelector(".slider-red");
const green = document.querySelector(".slider-green");
const blue = document.querySelector(".slider-blue");
const html = document.querySelector("html");
const sliderContainer = document.querySelector(".slider-container");
const hexValue = document.querySelector(".hexvalue");
const button = document.querySelector(".btn-random-color");

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
  fontColorBtn();
});

// event listener for button - load random color
button.addEventListener("click", function (event) {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      hexValue.innerText = data.color.toLowerCase();
      html.style.setProperty("--value-red", data.rgb.r);
      html.style.setProperty("--value-green", data.rgb.g);
      html.style.setProperty("--value-blue", data.rgb.b);
      red.value = data.rgb.r;
      green.value = data.rgb.g;
      blue.value = data.rgb.b;
      fontColorBtn();
    });
});

function fontColorBtn() {
  console.log(
    parseInt(red.value) + parseInt(green.value) + parseInt(blue.value)
  );
  if (
    parseInt(red.value) + parseInt(green.value) + parseInt(blue.value) <
    250
  ) {
    button.style.setProperty("color", "white");
  } else {
    button.style.setProperty("color", "black");
  }
}
