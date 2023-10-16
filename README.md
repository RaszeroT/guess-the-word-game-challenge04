# Description

<p> This webpage is a Javascript Pop Quiz. Upon clicking start the user will be presented with a multiple choice question, the start button will also start a timer of 120 seconds. If the user answers the question correctly the user will be presented with another question and so forth until all questions have been answered. However, if a question is answered incorrectly the user will have 5 seconds deducted from the timer. The timer deductions will continue for each question answered incorrectly until the user either finishes the questions, or runs out of time. The time left remaining once finishing the quiz will be stored as a highscore. The user will be able to locally store their high scores by entering their initials. The input for the user initials will be presented immediately after all questions have been answered, or once the timer hits 0. Highscore's will either be presented after user initials have been entered or when the user clicks the 'View Highscore' button.</p>

## Code in index.HTML

<p> Index.html is as bare as possible as this web page has been created dynamically through JavaScript. Although created dynamically index.html has been labeled and id'd as accurately as possible for readability purposes.</p>
<ul>
<li>Header element containing title, brief description, clickable start button, and clickable highscore button,</li>
<li>Div for clickArea,</li>
<li>Div for initials input, and</li>
<li>Div for scores container.</li>
</ul>

## Code in style.css

<ul>
<li>Body background color,</li>
<li>Centered text and added padding-top,</li>
<li>changed size and color of start button, and</li>
<li>Class .hide to display none to hide elements and remove class dynamically through JavaScript.</li>
</ul>

## Code in script.js

<p>This webpage is an attempt to learn and practice how to create items dynamically through JavaScript while still remaining functioning.</p>
<ul>
<li>Added d.query to pull from html "id",</li>
<li>Created variables to set time and index,</li>
<li>Created questions to guess. Array of objects to be called,</li>
<li>Created next question function with conditional to cycle through questions,</li>
<li>Created need questionContainer to add playable area,</li>
<li>Created check answer conditional so if question answered incorrect time will be deducted from timer,</li>
<li>Created score board, retrieve from storage,</li>
<li>Created timer function,</li>
<li>Created start game function so necessary functions can be called on for onclick event,</li>
<li>Created endgame function so necessary functions can be called on for either end of for loop and/or timer run out,</li>
<li>Added event listeners for necessary events, and</li>
<li>Added .getItem event to grab scores from local storage.</li>
</ul>

## Link to live site

<a href="https://raszerot.github.io/guess-the-word-game-challenge04/">My Pop Quiz!!</a>


## Images of webpage functionality

<img src="" alt="">
<img src="" alt="">
<img src="" alt="">
<img src="" alt="">
<img src="" alt="">

## License

N/A
