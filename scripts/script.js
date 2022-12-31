"use strict";

// Get elements
const mainCardEl = document.getElementById("card-one");
const secondCardEl = document.getElementById("card-two");
const changeEl = document.getElementById("number");
// Button elements
const buttonEl = document.querySelectorAll(".btn");
const submitEl = document.getElementById("submit");
const ratingEl = document.getElementById("btn-rating");

// Gobble variable
function init() {
  changeEl.innerText = 0;
}

init();

// Event listener
submitEl.addEventListener("click", function () {
  // view second card
  secondCardEl.classList.remove("hidden");
  // remove main card
  mainCardEl.style.display = "none";
});

buttonEl.forEach(function (Event) {
  Event.addEventListener("click", function () {
    changeEl.innerHTML = Event.innerHTML;
  });
});

ratingEl.addEventListener("click", function () {
  // remove second card
  secondCardEl.classList.add("hidden");
  // view main card
  mainCardEl.style.display = "block";
});

// ratingEl.addEventListener("click", function () {
//   // view main card
//   mainCardEl.classList.remove("hidden");
//   // remove second card
//   secondCardEl.style.display = "none";
// });
