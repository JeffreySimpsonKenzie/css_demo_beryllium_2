// Element Selectors
const body = document.querySelector("body");
const pageHeading = document.querySelector(".page-heading");
let styleButton = document.querySelector(".add-style");
let scoreElement = document.querySelector(".score-element");
let answerForm = document.querySelector(".answer-form");
let resultElement = document.querySelector(".question-box>.result");

//Select an element with an ID
let questionBox = document.getElementById("question-box");
console.log(questionBox);

questionBox = document.querySelector("#question-box");
console.log(questionBox);

// Select an element with a Class
questionBox = document.querySelector(".question-box");
console.log(questionBox);

/* USE JAVASCRIPT TO ADD STYLE! */

// Style elements directly in JavaScript
// pageHeading.style.border = "2px solid yellow";
// questionBox.style.border = "2px solid var(--tan)";

/* ADD CLASSES TO GIVE STYLE */

// Use a button event listener to toggle a class
styleButton.addEventListener("click", () =>
  scoreElement.classList.toggle("cool")
);

// Use if statements to give a class for styling
let isCorrect = false;

if (isCorrect === true) {
  resultElement.classList.toggle("correct-answer");
  scoreElement.classList.toggle("blue");
} else if (isCorrect === false) {
  resultElement.classList.toggle("wrong-answer");
}
