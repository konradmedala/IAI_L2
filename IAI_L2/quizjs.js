let currentQuestion = 0;
let score = 0;
let totalQuestions = questions.length;

let container = document.getElementById('quizContainer');
let questionElement = document.getElementById('question');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let nextButton = document.getElementById('nextButton');
let resultContainer = document.getElementById('result');

function loadQuestion(questionIndex) {
    let q = questions[questionIndex];
    questionElement.textContent = (questionIndex + 1) + '.' + q.question;
    opt1.textContent = q.Opcja1;
    opt2.textContent = q.Opcja2;
    opt3.textContent = q.Opcja3;
    opt4.textContent = q.Opcja4;
}

function LoadNextQuestion() {
    let selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert('Prosze zaznacz odpowiedz!');
        return;
    }
    let answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'koniec';
    }
    if (currentQuestion == totalQuestions) {
        container.style.display = 'none';
        resultContainer.style.display = '';
        resultContainer.textContent = 'Twoj wynik: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);