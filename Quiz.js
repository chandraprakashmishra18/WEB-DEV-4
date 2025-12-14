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
