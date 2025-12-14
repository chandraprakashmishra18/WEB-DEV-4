# WEB-DEV ASSIGNMENT NO-4
# A Simple JavaScript Command-Line Quiz

**College Assignment: [WEB-DEV-1]**
----------------------------------------------------------------------------------------------------------
## Overview

This repository contains a simple, interactive quiz application built purely with **JavaScript**. The quiz runs directly in the browser's console or a Node.js environment (though it's designed for the browser).

The purpose of this assignment was to demonstrate fundamental JavaScript concepts, including:

* Arrays and Objects for data structures.
* Looping constructs (`for` and `while`) for iteration.
* Conditional logic (`if/else`) for checking answers.
* Functions for program modularity and execution flow.
* Basic string manipulation (e.g., `toLowerCase()`, `trim()`).
* User interaction via `prompt()`, `alert()`, and `confirm()`.
* --------------------------------------------------------------------------------------------------------------------------------
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Prompt Quizzer</title>
    </head>
    <body>
        <h1>Open your browser's console (F12) to start the quiz!</h1>
        <script src="[Your-Script-Filename].js"></script> 
        </body>
    </html>
    ```
3.  **Run the Quiz:**
    * Open the `index.html` file in your web browser.
    * The quiz will automatically start, prompting you for answers one by one.
    * The score is displayed at the end, and you are given the option to play again.
------------------------------------------------------------------------------------------------------------------------------
## Code Structure
The entire application logic resides in a single JavaScript file.
------------------------------------------------------------------------------------------------------------------------------
### Const QuizQuestions

This is the core data structure, an array of objects. Each object contains a `question` string and an `answer` string.

javascript
const quizQuestions = [
{
question: "What is the capital of India ?",
answer: "delhi"},
more questions
];
function runQuiz()
This function manages the quiz game logic:

Initializes the score.

Iterates through the quizQuestions array using a for loop.

Prompts the user for an answer using prompt().

Normalizes the user's input (toLowerCase().trim()).

Compares the normalized answer to the correct answer.

Increments the score if correct and alerts the user of the outcome.
----------------------------------------------------------------------------------------------------------------
const quizQuestions = [
    {
        question: "What is the capital of India ?",
        answer: "delhi"
    },
    {
        question: "What is 5 + 3?",
        answer: "8"
    },
    {
        question: "Which planet is closest to the Sun?",
        answer: "mercury"
    },
    {
        question: "Which planet is known as red planet?",
        answer: "mars"
    },
    {
        question: "What is the capital of Uttrakhand in winter?",
        answer: "dehradun"
    },
    {
        question: "What does css stand for?",
        answer:"cascading style sheets"
    },
    {
        question: "What does html stand for?",
        answer: "hyper text markup language"
    },
    {
        question: "Who invented Javascript?",
        answer: "brendan eich"
    },
    {
        question: "Which programming language is commonly used for front-end web development?",
        answer: "javascript"
    },
    {
        question: "What is 12 * 4?",
        answer: "48"
    }

];

function runQuiz() {
    let score = 0; 
    const totalQuestions = quizQuestions.length;

    for (let i = 0; i < totalQuestions; i++) {
        const currentQuizItem = quizQuestions[i];

        const userAnswer = prompt(currentQuizItem.question);

        if (userAnswer === null) {
            alert("Quiz interrupted. Exiting game.");
            return;
        }

        
        const normalizedUserAnswer = userAnswer.toLowerCase().trim();
        
        
        const acceptedAnswers = currentQuizItem.answer;

       
        if (acceptedAnswers.includes(normalizedUserAnswer)) {
            alert("Correct!");
            score++;
        } else {
        
            alert(Wrong! A correct answer was: ${acceptedAnswers[0]});
        }
    }

    alert(Quiz Over! Your final score is ${score} out of ${totalQuestions}.);
}

function startGame() {
    let playAgain = true;

    while (playAgain) {
        runQuiz();

        playAgain = confirm("Do you want to play the Prompt Quizzer again?");
    }

    alert("Thanks for playing! Goodbye.");
}

startGame();

Finally, displays the total score using alert().
-----------------------------------------------------------------------------------------------------------------
function startGame()
This is the main entry point of the application:

Uses a while loop to allow the user to play multiple rounds.

Calls runQuiz() to start a round.

Asks the user if they want to play again using confirm().

Displays a final goodbye message when the user chooses not to play again.
-----------------------------------------------------------------------------------------------------------------
<b><ul>Assignment Requirements Achieved</ul><b/>
Interactive User Interface: Implemented using prompt(), alert(), and confirm().

Data Storage: Questions and answers stored in a const array of objects.

Iteration: Uses a for loop inside runQuiz() to cycle through questions.

Scoring Logic: Correctly tracks and displays the user's score.

Case/Whitespace Insensitivity: User input is normalized with .toLowerCase().trim() to allow for flexible answering.
------------------------------------------------------------------------------------------------------------------
<b><ul>Potential Improvements (Future Work)</b><ul>
For future versions or a more advanced project, the following improvements could be made:

HTML/DOM Interface: Migrate the quiz from prompt/alert to an actual HTML interface for a better user experience.

Multiple Correct Answers: The current structure assumes a single correct answer. Could be updated to accept an array of accepted answers.

Error Handling: Implement more robust input validation (e.g., checking for empty strings, non-numeric input for math questions).

Randomized Questions: Shuffle the quizQuestions array before the quiz starts to offer variety.
--------------------------------------------------------------------------------------------------------------------
:- Author
[chandra Prakash Mishra]

:-Student Name: [ Chandra Prakash Mishra ]
:-Roll No: [ 2501010311 ]
