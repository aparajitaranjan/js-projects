const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctica", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  const { question, answers } = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${question}`;

  answerButtons.innerHTML = answers
    .map(
      (answer) => `
      <button class="btn" data-correct="${answer.correct}">
        ${answer.text}
      </button>
    `
    )
    .join("");

  answerButtons
    .querySelectorAll("button")
    .forEach((button) => button.addEventListener("click", selectAnswer));
};

const resetState = () => {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  selectedBtn.classList.add(isCorrect ? "correct" : "incorrect");
  if (isCorrect) score++;

  answerButtons.querySelectorAll("button").forEach((button) => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    button.disabled = true;
  });

  nextButton.style.display = "block";
};

const showScore = () => {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
};

const handleNextButton = () => {
  currentQuestionIndex++;
  currentQuestionIndex < questions.length ? showQuestion() : showScore();
};

nextButton.addEventListener("click", () => {
  currentQuestionIndex < questions.length ? handleNextButton() : startQuiz();
});

document.addEventListener("DOMContentLoaded", startQuiz);
