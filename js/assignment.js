"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input");
const submissionBtn = document.getElementById("submission-btn");

// Create an immutable variable to store the reference to the paragraph tag with id "response"
const responseEl = document.getElementById("response");

// Create a mutable variable called age but do not assign it a value
let age;

function checkAgeAndRespond() {
    // Parse the age input value as an integer and store it in the age variable
    age = parseInt(ageInputEl.value);

    // Conditional logic to check the age and render the correct message
    if (age >= 21) {
        responseEl.textContent = "You can vote and purchase alcohol.";
    } else if (age >= 18) {
        responseEl.textContent = "You can vote, but you cannot purchase alcohol.";
    } else {
        responseEl.textContent = "You cannot vote and you cannot purchase alcohol.";
    }
}

// Add an event listener to the submit button to invoke checkAgeAndRespond when clicked
submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});

// Function to validate the input, preventing invalid characters like 'e', 'E', '-', '+'
function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

// Add a keydown event listener to the age input to validate user input
ageInputEl.addEventListener("keydown", validateInput);
