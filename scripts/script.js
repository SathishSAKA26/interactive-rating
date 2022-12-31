"use strict";

// get elements
const mainCardEl = document.getElementById("card-one");
const secondCardEl = document.getElementById("card-two");
const changeEl = document.getElementById("number");
// button elements
const buttonEl = document.querySelectorAll(".btn");
const submitEl = document.getElementById("submit");
const ratingEl = document.getElementById("btn-rating");

// gobble variable
function init() {
  changeEl.innerText = 0;
}

init();
