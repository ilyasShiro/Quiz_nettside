let questions = [
    "Hva er GPU?",
    "Hva gjør Windows + L?",
    "Er GitHub og Git det samme?",
    "Hva er CPU?",
    "Hva er CSS brukt for?"
];

let answersleft = [
    "Graphic card",
    "Låser PC-en",
    "Nei",
    "RTX",
    "Styling til nettside"
];

let answersright = [
    "General Power User",
    "Slår av PC-en",
    "Ja",
    "Hjernen til PC-en",
    "Linke nettsidene"
];

// 0 = venstre svar er riktig
// 1 = høyre svar er riktig
let correctAnswers = [
    0,
    0,
    0,
    1,
    0
];

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const sporsmal = document.getElementById("sporsmal");
const poeng = document.getElementById("poeng");

let current = 0;
let score = 0;

function showQuestion() {
    sporsmal.textContent = questions[current];
    button1.textContent = answersleft[current];
    button2.textContent = answersright[current];
}

function answer1() {
    if (correctAnswers[current] === 0) {
        score++;
    }

    nextQuestion();
}

function answer2() {
    if (correctAnswers[current] === 1) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    current++;

    if (current >= questions.length) {
        sporsmal.textContent = "Quizen er ferdig! 🎉";

        button1.style.display = "none";
        button2.style.display = "none";

        poeng.textContent = "Poeng: " + score + " / " + questions.length;

        return;
    }

    poeng.textContent = "Poeng: " + score;

    showQuestion();
}

showQuestion();
const resetButton = document.getElementById("resetButton");

function resetQuiz() {
    current = 0;
    score = 0;

    button1.style.display = "block";
    button2.style.display = "block";

    poeng.textContent = "Poeng: 0";

    showQuestion();
}

resetButton.addEventListener("click", resetQuiz);
