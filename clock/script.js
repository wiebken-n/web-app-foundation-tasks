// initialize variables
const html = document.querySelector("html");
const digiHours = document.querySelector(".digi-hours");
const digiMinutes = document.querySelector(".digi-minutes");
const digiSeconds = document.querySelector(".digi-seconds");
const digiDots = document.querySelectorAll(".digi-dots");

const analogHours = document.querySelector(".analog-hours");
const analogMinutes = document.querySelector(".analog-minutes");
const analogSeconds = document.querySelector(".analog-seconds");

// update current time
updateTime();

// set interval at which current time is updated
setInterval(updateTime, 1000);

// toggle dark mode
toggleDarkMode();

function updateTime() {
  //  get current time
  let date = new Date();

  // digital clock
  digiHours.innerText = convertTime(date.getHours());
  digiMinutes.innerText = convertTime(date.getMinutes());
  digiSeconds.innerText = convertTime(date.getSeconds());
  digiDots.forEach((entry) => entry.classList.toggle("invisible"));

  // analog clock
  html.style.setProperty("--seconds", date.getSeconds() * 6 + "deg");
  html.style.setProperty("--minutes", date.getMinutes() * 6 + "deg");
  html.style.setProperty("--hours", (date.getHours() - 12) * 30 + "deg");

  // background-colors
  html.style.setProperty("--red", date.getHours() * (100 / 24) + 50);
  html.style.setProperty("--green", date.getMinutes() * (100 / 60) + 150);
  html.style.setProperty("--blue", date.getSeconds() * (150 / 60) + 50);
}

// convert time to double digits (if necessary)
function convertTime(time) {
  time = time.toString();
  if (time.length === 1) {
    time = "0" + time;
  }
  return time;
}

// change to/from darkmode according to current time
function toggleDarkMode() {
  let date = new Date();
  let currentHour = date.getHours();
  if (currentHour >= 21 || currentHour <= 7) {
    html.classList.add("html-dark");
  } else {
    html.classList.remove("html-dark");
  }
}
