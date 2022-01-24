// Global variables
const answers = document.querySelector(".answers").childNodes;
const a = document.getElementById("a");
const b = document.getElementById("b");

a.innerText = randomQ();
b.innerText = randomQ();

let result = a.textContent * b.textContent;
let max = result;
let min = result - 10;

const options = document.querySelectorAll("#option");
const optionsArray = [];

for (let i = 0; i < 3; i++) {
  optionsArray.push(options[i]);
}

const distractArray = [];
let foo = 0;

function randomQ() {
  return Math.floor(Math.random() * 11 + 2);
}

function distract() {
  // Created an array of 2 unique numbers
  while (distractArray.length < 3) {
    foo = Math.floor(Math.random() * (max - min + 1) + min);
    if (distractArray.indexOf(foo) == -1 && foo != result) {
      distractArray.push(Math.abs(foo));
    }
  }

  // Displaying the two unique numbers as distractions
  for (let j = 0; j < 3; j++) {
    optionsArray[j].innerText = distractArray[j];
  }
}

function correctAnswer() {
  let resultLoc = Math.floor(Math.random() * 3);
  optionsArray[resultLoc].innerText = result;

  optionsArray[resultLoc].addEventListener("click", () => {
    optionsArray[resultLoc].style.color = "palevioletred";
    setTimeout("location.reload()", 300);
  });
}

distract();
correctAnswer();

// window.addEventListener("load", () => {});
