// d.query to pull from html
const startEl = document.querySelector("#startButton");
const timeLeftEl = document.querySelector("#timer");
const questionArea = document.getElementById("clickArea");
const enterInitials = document.querySelector("#enterInitials");
const highScoreForm = document.querySelector("#highScoreForm");
const scoreBoard = document.querySelector("#scoreBoard");
const questionContainer = document.querySelector("#questionContainer");
const viewHighscoresBtn = document.querySelector("#viewHighscores");
const clearHighscoresBtn = document.querySelector("#clearHighscores");
const scoresContainer = document.querySelector('#scoresContainer')

// variables to set time and index
let timer = 120;
let currentQuestionIndex = 0;

// questions to guess. Array of objects to be called 
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
    question: "Where is the place to link the Javascript?",
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

//next question function conditional to cycle through questions 
function nextQuestion() {
  if (currentQuestionIndex !== questions.length) {
    let currentQuestion = questions[currentQuestionIndex];
    let questionTitle = currentQuestion.question;
    let choices = currentQuestion.choices;
    let titleEl = document.querySelector("#clickArea h3");
    let buttons = document.querySelectorAll(".choiceButton");
    titleEl.textContent = questionTitle;
    for (var i = 0; i < 4; i++) {
      let current = buttons[i];
      current.textContent = choices[i];
    }
  }
}

//need questionContainer/playable area 
function createQuestionContainer() {
  if (currentQuestionIndex !== questions.length) {
    let currentQuestion = questions[currentQuestionIndex];
    let titleEl = document.createElement("h3");
    titleEl.textContent = currentQuestion.question;
    questionContainer.appendChild(titleEl);
    for (var i = 0; i < 4; i++) {
      let choiceEl = document.createElement("button");
      choiceEl.classList.add("choiceButton");
      questionContainer.appendChild(choiceEl);
    }
  }
}

// Check answer conditional
function checkAnswer(e) {
  let currentQuestion = questions[currentQuestionIndex];
  if (e.target.innerText !== currentQuestion.answer) {
    timer -= 5;
  }
  currentQuestionIndex++;
  nextQuestion();
}

// create score board, retrieve from storage 
function showHighscores() {
  questionArea.classList.add("hide");
  enterInitials.classList.add("hide");
  scoreBoard.classList.remove("hide");
  scoresContainer.innerHTML = ""
  const currentHighscores = JSON.parse(localStorage.getItem("highscores"));
  if (!currentHighscores) {
    const noHighscoresEl = document.createElement("h3");
    noHighscoresEl.innerHTML = "No highscores saved.";
    return scoresContainer.append(noHighscoresEl);
  }
  const highscoresList = document.createElement("ol");
  for (let i = 0; i < currentHighscores.length; i++) {
    let score = document.createElement("li");
    score.innerHTML =
      "Initials: " +
      currentHighscores[i].initials +
      " " +
      "Score: " +
      currentHighscores[i].score;
    highscoresList.append(score);
  }
  scoresContainer.append(highscoresList);
}

//timer
function startTimer() {
  var timerFunction = setInterval(function () {
    timeLeftEl.innerHTML = timer;
    timer--;
    if (timer < 0 || currentQuestionIndex === questions.length) {
      clearInterval(timerFunction);
      endGame();
    }
  }, 1000);
}

// start game, call on needed functions for onclick
function startGame() {
  questionContainer.innerHTML = "";
  enterInitials.classList.add("hide");
  scoreBoard.classList.add("hide");
  timer = 120;
  currentQuestionIndex = 0;
  questionArea.classList.remove("hide");
  createQuestionContainer();
  startTimer();
  nextQuestion();
}

// endgame
function endGame() {
  questionArea.classList.add("hide");
  enterInitials.classList.remove("hide");
}

// need listeners 
startEl.addEventListener("click", function () {
  startGame();
});
questionArea.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    checkAnswer(e);
  }
});

highScoreForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const initials = document.querySelector("#initials").value;
  if (!initials) {
    return alert(
      "No highscore saved, please enter your initials to save highscore"
    );
  }
  //  retrieve scores
  const currentHighscores =
    JSON.parse(localStorage.getItem("highscores")) || [];
  currentHighscores.push({
    initials: initials,
    score: timer,
  });
  localStorage.setItem("highscores", JSON.stringify(currentHighscores));
  showHighscores();
});

viewHighscoresBtn.addEventListener("click", showHighscores);
clearHighscoresBtn.addEventListener("click", function () {
  localStorage.removeItem("highscores");
  showHighscores();
});
