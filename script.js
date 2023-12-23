const questions = [
    {
        question: "What is Batman's real identity?",
        answers: [
            { text: "Tony Stark", correct: false },
            { text: "Tom Holland", correct: false },
            { text: "Jimmy Neutron", correct: false },
            { text: "Bruce Wayne", correct: true },
        ]
    },
    {
        question: "Who caused the event that would eventually create Batman?",
        answers: [
            { text: "The Riddler", correct: false },
            { text: "Poison Ivy", correct: false },
            { text: "Joe Chill", correct: true },
            { text: "Thomas Wayne", correct: false },
        ]
    },
    {
        question: "Who is Batman's arch-nemesis?",
        answers: [
            { text: "Catwoman", correct: false },
            { text: "The Joker", correct: true },
            { text: "Solomon Grundy", correct: false },
            { text: "Clayface", correct: false },
        ]
    },
    {
        question: "Why does Batman not kill?",
        answers: [
            { text: "Because of justice!", correct: false },
            { text: "Because of vengeance!", correct: false },
            { text: "Because of self-pride!", correct: false },
            { text: "Because of the reminder that if he kills, he is no better than the one who killed his parents!", correct: true },
        ]
    },
    {
        question: "What is the most used tactic by Batman?",
        answers: [
            { text: "Prep time", correct: false },
            { text: "Scare tactics", correct: true },
            { text: "Combat tactics", correct: false },
            { text: "Hiding in the shadows", correct: false },
        ]
    },
    {
        question: "Why are criminals scared of Batman?",
        answers: [
            { text: "Because he just looks scary!", correct: false },
            { text: "Because he is a bat!", correct: false },
            { text: "Because he is the dark knight!", correct: false },
            { text: "Because he can break their arms and legs with ease!", correct: true },
        ]
    },
    {
        question: "Why does Batman sometimes lose to the Joker?",
        answers: [
            { text: "Because the Joker has an extremely high IQ just like Batman!", correct: false },
            { text: "Because the Joker plans everything and Batman gets surprised!", correct: false },
            { text: "Because the Joker is unpredictable and Batman gets caught off guard!", correct: true },
            { text: "Because the Joker uses schemes and manipulation tactics to lure Batman!", correct: false },
        ]
    },
    {
        question: "What does the Bat symbol mean?",
        answers: [
            { text: "It is a sign of Pride!", correct: false },
            { text: "It is a sign for Vengeance!", correct: false },
            { text: "It is a sign of Justice!", correct: false },
            { text: "It is a sign of Hope!", correct: true },
        ]
    },
    {
        question: "Who is the superhero that Batman says he can't beat and can't predict?",
        answers: [
            { text: "Superman!", correct: false },
            { text: "The Flash!", correct: true },
            { text: "Green Lantern!", correct: false },
            { text: "Wonder Woman!", correct: false },
        ]
    },
    {
        question: "Why did Batman create contingency plans for the Justice League and even himself?",
        answers: [
            { text: "It is because of his paranoia towards others!", correct: false },
            { text: "It is because of personal gain and he wants all the glory for himself!", correct: false },
            { text: "It is because of safety precautions and he just wants them to abide by the rules!", correct: false },
            { text: "It is because he considers himself and the Justice League to be major threats towards Earth if they ever go rogue!", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    answerButton.innerHTML = ""; // Clear previous answer buttons

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        // Add event listener to each answer button
        button.addEventListener("click", () => {
            checkAnswer(answer.correct);
        });
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Show the next question
        showQuestion();
    } else {
        // Display final score or any other ending logic
        alert("Quiz completed. Your score: " + score);
        // Optionally, you can restart the quiz or perform other actions here
    }
}

// Add event listener to the next button
nextButton.addEventListener("click", startQuiz);

// Call startQuiz initially to start the quiz when the page loads
startQuiz();
