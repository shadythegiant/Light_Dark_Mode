"use strict";
const toggleSwitch = document.getElementById("toggle-btn");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

//

function imagColor(color) {
  image1.src = `img/undraw_feeling_proud_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_feeling_proud_${color}.svg`;
}

//
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].className = "fas fa-moon";
  imagColor("dark");
}

function LightMode() {
  nav.style.backgroundColor = "rgb(255 255 255/ 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].className = "fas fa-sun";
  imagColor("light");
}
//
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    LightMode();
  }
}

toggleSwitch.addEventListener("change", switchTheme);
