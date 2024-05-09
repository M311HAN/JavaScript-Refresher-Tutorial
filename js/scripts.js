// A simple console log
console.log("Welcome to the JavaScript Refresher Tutorial");

// For variable page ---------------------------------------------------------------->
// A function to display a greeting based on user input or default greeting if input is empty
function displayGreeting() {
  let userInput = document.getElementById("greetingInput").value;
  let displayElement = document.getElementById("greetingDisplay");
  displayElement.textContent = userInput ? userInput : "Hello, World!";
}

// Event listener for the button click to call displayGreeting function
document.addEventListener("DOMContentLoaded", (event) => {
  const displayButton = document.getElementById("displayButton");
  if (displayButton) {
    displayButton.addEventListener("click", displayGreeting);
  }
});

// For conditional page ---------------------------------------------------------------->
// Function to check if the input number is positive, negative, or zero, and display appropriate message
function checkNumber() {
  let number = document.getElementById("numberInput").value;
  let outputElement = document.getElementById("numberOutput");

  number = Number(number); // Convert input to number

  if (number > 0) {
    outputElement.textContent = "The number is positive.";
  } else if (number < 0) {
    outputElement.textContent = "The number is negative.";
  } else if (number === 0) {
    outputElement.textContent = "The number is zero.";
  } else {
    outputElement.textContent = "Please enter a valid number.";
  }
}

// Event listener for the button click to call checkNumber function
document.addEventListener("DOMContentLoaded", (event) => {
  const checkNumberButton = document.getElementById("checkNumberButton");
  if (checkNumberButton) {
    checkNumberButton.addEventListener("click", checkNumber);
  }
});

// For loops page ---------------------------------------------------------------->
// Toggles the display of squares list: hide if displayed, show if hidden
function toggleSquaresDisplay() {
  const listElement = document.getElementById("squaresList");
  // If the list is already populated, toggle its visibility
  if (listElement.innerHTML) {
    // Clear the list, effectively hiding it
    listElement.innerHTML = "";
    return;
  }
  // If the list is empty, generate and show squares
  for (let i = 1; i <= 10; i++) {
    const square = i * i;
    const listItem = document.createElement("li");
    listItem.textContent = `Number: ${i}, Square: ${square}`;
    listElement.appendChild(listItem);
  }
}

// Event listener for the button click to call toggleSquaresDisplay function
document.addEventListener("DOMContentLoaded", (event) => {
  const showSquaresButton = document.getElementById("showSquaresButton");
  if (showSquaresButton) {
    showSquaresButton.addEventListener("click", toggleSquaresDisplay);
  }
});

// for arrays page ---------------------------------------------------------------->
let myArray = [];

function updateArrayDisplay() {
  document.getElementById("arrayDisplay").textContent = JSON.stringify(myArray);
}
// Adds new elements to the array and updates display
function addToArray() {
  const value = document.getElementById("arrayInput").value;
  // Add the value to the array
  myArray.push(value);
  // Update the display
  updateArrayDisplay();
  // Clear the input
  document.getElementById("arrayInput").value = "";
}

function removeFromArray() {
  // Remove the last element from the array
  myArray.pop();
  // Update the display
  updateArrayDisplay();
}

// Event listeners for the add and remove buttons
document.addEventListener("DOMContentLoaded", (event) => {
  document
    .getElementById("arrayAddButton")
    .addEventListener("click", addToArray);
  document
    .getElementById("arrayRemoveButton")
    .addEventListener("click", removeFromArray);
  // Initial display update
  updateArrayDisplay();
});

// For Functions page ---------------------------------------------------------------->
// Combines user inputs into a sum and displays the result
function addNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 + num2;
  document.getElementById("functionResult").textContent = `Result: ${result}`;
}

function multiplyNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 * num2;
  document.getElementById("functionResult").textContent = `Result: ${result}`;
}

// Event listeners for the add and multiply buttons
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("addButton").addEventListener("click", addNumbers);
  document
    .getElementById("multiplyButton")
    .addEventListener("click", multiplyNumbers);
});

// For events page ---------------------------------------------------------------->
// Sets up various event listeners for interactive components
function setupEventListeners() {
  const eventBox = document.getElementById("eventBox");
  const keyInput = document.getElementById("keyInput");
  const eventOutput = document.getElementById("eventOutput");

  eventBox.addEventListener("mouseover", () => {
    eventOutput.textContent = "Mouse is over the box!";
  });

  eventBox.addEventListener("mouseout", () => {
    eventOutput.textContent = "Mouse is out of the box!";
  });

  keyInput.addEventListener("keydown", (event) => {
    eventOutput.textContent = `Key pressed: ${event.key}`;
  });
}

// Initialize event listeners after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", setupEventListeners);

// For maps page ---------------------------------------------------------------->
let userMap = new Map();
// Adds user details to a Map and updates the display of all users
function addUser() {
  const userId = document.getElementById("userIdInput").value;
  const userName = document.getElementById("userNameInput").value;
  if (!userId || !userName) {
    alert("Both User ID and Name are required.");
    return;
  }
  userMap.set(userId, userName);
  // Call to update the full list display
  updateMapDisplay();
  document.getElementById("userIdInput").value = "";
  document.getElementById("userNameInput").value = "";
}

function updateMapDisplay() {
  const mapOutput = document.getElementById("mapOutput");
  // Clear previous content
  mapOutput.textContent = "";
  userMap.forEach((name, id) => {
    const userEntry = document.createElement("div");
    userEntry.textContent = `User ID: ${id} Username: ${name}`;
    mapOutput.appendChild(userEntry);
  });
}

// Retrieves and displays user information based on the provided User ID
function getUser() {
  const userId = document.getElementById("userIdInput").value;
  if (!userId) {
    alert("User ID is required to retrieve a user.");
    return;
  }
  const userName = userMap.get(userId);
  if (userName) {
    document.getElementById(
      "mapOutput"
    ).textContent = `User ID ${userId} is ${userName}.`;
  } else {
    document.getElementById(
      "mapOutput"
    ).textContent = `No user found with ID ${userId}.`;
  }
}

// Removes a user from the map based on User ID and updates the display accordingly
function removeUser() {
  const userId = document.getElementById("userIdInput").value;
  if (!userId) {
    alert("User ID is required to remove a user.");
    return;
  }
  const isDeleted = userMap.delete(userId);
  if (isDeleted) {
    document.getElementById(
      "mapOutput"
    ).textContent = `User with ID ${userId} removed.`;
  } else {
    document.getElementById(
      "mapOutput"
    ).textContent = `No user found with ID ${userId} to remove.`;
  }
}

// Event listeners for the buttons
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addUserButton").addEventListener("click", addUser);
  document.getElementById("getUserButton").addEventListener("click", getUser);
  document
    .getElementById("removeUserButton")
    .addEventListener("click", removeUser);
});

// For jQuery page ---------------------------------------------------------------->
// Set up jQuery to respond to button clicks and change text in the display
$(document).ready(function () {
  var sentences = [
    "Welcome to the wonderful world of jQuery!",
    "jQuery makes JavaScript super-charged!",
    "You're now using jQuery to handle clicks!",
  ];
  // Hides the text display when clicked
  $("#hideButton").click(function () {
    $("#textDisplay").hide();
  });
  // Shows the hidden text display when clicked
  $("#showButton").click(function () {
    $("#textDisplay").show();
  });
  // Toggles visibility of the text display when clicked
  $("#toggleTextButton").click(function () {
    $("#textDisplay").toggle();
  });
  // Calculate a random index
  // Change the text to a random sentence from the array
  $("#changeTextButton").click(function () {
    var randomIndex = Math.floor(Math.random() * sentences.length);
    $("#textDisplay").text(sentences[randomIndex]);
  });
});

// Quiz for all pages ---------------------------------------------------------------->
// Function to check quiz answers based on selected radio button and display the result
function checkAnswer(quizType) {
  const answers = document.getElementsByName("answer");
  let selectedAnswer = "";
  for (let answer of answers) {
    if (answer.checked) {
      // Get the value of the selected radio button
      selectedAnswer = answer.value;
      break;
    }
  }

  const quizDetails = {
    loops: {
      correctAnswer: "3",
      message:
        "Correct! A 'for' loop requires initialization, a condition, and an increment.",
    },
    conditions: {
      correctAnswer: "2",
      message: "Correct! 'if (i != 5)' executes code if i is NOT equal to 5.",
    },
    variables: {
      correctAnswer: "3",
      message:
        "Correct! The 'const' keyword declares a variable that cannot be reassigned.",
    },
    arrays: {
      correctAnswer: "1",
      message:
        "Correct! The 'push()' method adds an element to the end of an array.",
    },
    functions: {
      correctAnswer: "1",
      message: "Correct! Functions typically use parameters to receive inputs.",
    },
    events: {
      correctAnswer: "3",
      message:
        "Correct! The 'addEventListener()' method is used to attach an event handler to a specified element.",
    },
    maps: {
      correctAnswer: "2",
      message:
        "Correct! The 'get()' method is used to retrieve a value from a Map using a key.",
    },
    jquery: {
      correctAnswer: "3",
      message:
        "Correct! The '.hide()' method is used to hide an element in jQuery.",
    },
  };

  const resultText = document.getElementById("quiz-result");
  if (selectedAnswer === "") {
    // Use a different color to draw attention but keep it friendly
    resultText.textContent =
      "Whoops! It looks like you forgot to pick an answer. Give it another shot!";
    resultText.style.color = "orange";
  } else if (selectedAnswer === quizDetails[quizType].correctAnswer) {
    resultText.textContent = quizDetails[quizType].message;
    // Set text color to green for correct answers
    resultText.style.color = "green";
  } else {
    resultText.textContent = "Incorrect, try again!";
    // Set text color to red for incorrect answers
    resultText.style.color = "red";
  }
}

// funtion for back to top button
// Scrolls to the top of the page smoothly when called
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
