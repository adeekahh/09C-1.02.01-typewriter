"use strict";

let inputText = document.querySelector("#input-text").innerHTML;
let length = inputText.length;
let i = 0;

function writeTheText() {
  if (i < length) {
    let speed = Math.random() * 160;
    console.log(speed);
    let textPart = inputText.substring(0, i);
    document.querySelector("#typewriter").innerHTML = textPart;
    i++;
    setTimeout(writeTheText, speed);
  } else {
    document.querySelector(".the-rock").style.opacity = 1;
    document.querySelector("#name-of-the-rock").style.opacity = 1;
  }
}

writeTheText();
