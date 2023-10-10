// d.query to pull from html
let startEl = document.querySelector("#startButton");
let winsEl = document.querySelector("#winCount");
let lossesEl = document.querySelector("#lossCount");
let timeLeftEl = document.querySelector("#timer");
let resetTimeEl = document.querySelector("#resetButton");

// variables to set score and time
let timer = 5;
let wins = 0;
let losses = 0;
let questionsCorrect = 0;
let questionsToGuess = "";

// questions to guess. Need to be objects instead of arrays.. An array of objects?
let questions = {
  question: "Commonly used data types DO NOT include?",
  answer1: "Strings",
  answer2: "Integers",
  answer3: "Boolean",
  Correct: "Variables",
};

questions = {
  question: "Inside which HTML element do you put the Javascript?",
  answer1: "<js>",
  answer2: "<scripter>",
  answer3: "<javascript>",
  Correct: "<script>",
};

questions = {
  question: "Where is the correct place to link the Javascript?",
  answer1: "<head>",
  answer2: "<header>",
  answer3: "<footer>",
  Correct: "<body>",
};

questions = {
  question: "How do you write 'Hello World' in an alert box?",
  answer1: "msgBox('Hello World')",
  answer2: "alertBox('Hello World')",
  answer3: "msg('Hello World')",
  Correct: "alert('Hello World')",
};

questions = {
  question: "How do you call a function called 'myFunction'?",
  answer1: "call function myFunction()",
  answer2: "function myFunction",
  answer3: "You can not call functions",
  Correct: "myFunction()",
};

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

// need init page load function

// need function for start button. Upon click timer must start counting down and I want start button to disappear. Stop function??
function startTimer() {
  var timerFunction = setInterval(function () {
    timeLeftEl.innerHTML = timer;
    timer--;
    if (timer < 0) {
      clearInterval(timerFunction);
      lose();
    }
    // if (questionsCorrect ===) {
    //   clearInterval(timerFunction);
    //   win();
    // }
  }, 1000);
}

function startGame() {
  startTimer();
  // Set all innerHTML of querySelectors above
  // if user guesses the question correctly, call win function
  questionsToGuess = questions[Math.floor(Math.random() * questions.length)];

  for (var i = 0; i < questionsToGuess.length; i++) {}
}

startEl.addEventListener("click", function () {
  startGame();
});

// question object needs to be randomized math.random math.floor

// when question answered correctly win count must ++ and be presented with new randomized question (I want correct clicks to be green)

// question answered wrong time is deducted from timer say 5 seconds (incorrect questions I want red) function to -- when wrong click area??
