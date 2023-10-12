// d.query to pull from html
let startEl = document.querySelector("#startButton");
//let winsEl = document.querySelector("#winCount");
//let lossesEl = document.querySelector("#lossCount");
let timeLeftEl = document.querySelector("#timer");
document.getElementById('clickArea')
// variables to set score and time
let timer = 5;
let wins = 0;
let losses = 0;
let questionsCorrect = 0;
let questionsToGuess = "";
let currentQuestionIndex = 0;
// questions to guess. Need to be objects instead of arrays.. An array of objects?
let questions = [
  {
    question: "Commonly used data types DO NOT include?",
    choices: ["Strings", "Integers", "Boolean", "Variables"],
    answer: "Variables",
  },
  {
    question: "Inside which HTML element do you put the Javascript?",
    choices: ["<js>", "<scripter>", "<javascript>", "<script>"],
    answer: "<script>",
  },
  {
    question: "Where is the aplace to link the Javascript?",
    choices: ["<head>", "<header>", "<footer>", "<body>"],
    answer: "<body>",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: [
      "msgBox('Hello World')",
      "alertBox('Hello World')",
      "msg('Hello World')",
      "alert('Hello World')",
    ],
    answer: "alert('Hello World')",
  },
  {
    question: "How do you call a function called 'myFunction'?",
    choices: [
      "call function myFunction()",
      "function myFunction",
      "You can not call functions",
      "myFunction()",
    ],
    answer: "myFunction()",
  },
];

function nextQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionTitle = currentQuestion.question;
  let questionAnswer = currentQuestion.answer;
  let titleEl = document.createElement("h3");
  let choices = currentQuestion.choices;
  for (var i = 0; i < choices.length; i++) {
    let choiceEl = document.createElement("button");
    choiceEl.textContent = choices[i];
  }
}

document.getElementById
//linked to currentQuestion variable
//.removeChild id=
//creating question h3 .textContent
//create choices as buttons

//for loop to call on question objects to run through questions (does not have to be randomized)
//
//use .removeElement(class, hide) so next div will be called on -clickevent-
//
//event listener to call on a question when start button is clicked
//
//something needs to be created dynamically?? choices of object array need to be created as buttons

// create initial score count and storage for wins and losses functions
function lose() {
  losses++;
  localStorage.setItem("losses", JSON.stringify(losses));
}

function win() {
  wins++;
  localStorage.setItem("wins", JSON.stringify(wins));
  document.location.reload();
}

// need function for start button. Upon click timer must start counting down and I want start button to disappear. Stop function??
function startTimer() {
  var timerFunction = setInterval(function () {
    timeLeftEl.innerHTML = timer;
    timer--;
    if (timer < 0) {
      clearInterval(timerFunction);
      lose();
    }
    if (questions === correct) {
      clearInterval(timerFunction);
      win();
    }
    console.log(timeLeftEl);
  }, 1000);
}

// question object needs to be randomized math.random math.floor

function startGame() {
  startTimer();
  nextQuestion();
  // Set all innerHTML of querySelectors above
  // if user guesses the question correctly, call win function

  for (var i = 0; i < questionsToGuess.length; i++) {}
}

startEl.addEventListener("click", function () {
  startGame();
  //call multiple function within eventlistener
});

// when question ed correctly win count must ++ and be presented with new randomized question (I want correct clicks to be green)

// question answered wrong time is deducted from timer say 5 seconds (incorrect questions I want red) function to -- when wrong click area??

// need init page load function
function init() {
  winsEl.innerHTML = JSON.parse(localStorage.getItem("wins")) || 0;
  lossesEl.innerHTML = JSON.parse(localStorage.getItem("losses")) || 0;
}

init();

// start function needs to hide screen and move to next
