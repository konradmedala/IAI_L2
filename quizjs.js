let currentQuestion=0;
let score=0;
let totalQuestions=questions.length;

let container=document.getElementById('quizContainer');
let questionElement =document.getElementById('question');
let opcja1=document.getElementById('opcja1');
let opcja2=document.getElementById('opcja2');
let opcja3=document.getElementById('opcja3');
let opcja4=document.getElementById('opcja4');
let nextButton=document.getElementById('nextButton');
let resultcontainer=document.getElementById('result');

function loadQuestion (questionIndex){
	let q=questions[questionIndex];
	questionElement.textContent=(questionIndex+1)+'.'+q.question;
	opcja1.textContent=q.opcja1;
	opcja2.textContent=q.opcja2;
	opcja3.textContent=q.opcja3;
	opcja4.textContent=q.opcja4;
};
function loadNextQuestion(){
	let selectedOption=document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Prosze zaznacz odpowiedz!');
		return;
	}
	let answer=selectedOption.value;
	if(questions[currentQuestion].answer==answer){
		score+=1;
}
selectedOption.checked=falsel
currentQuestion++;
if(currentQuestion==totalQuestions-1){
	nextButton.textContent='Finish';
}
if(currentQuestion=totalQuestions){
	container.style.display='none';
	resultcontainer.style.display='';
	resultcontainer.textContent='Twoj wynik: '+score;
	return;
}
LoadQuestion(currentQuestion);
}
	LoadQuestion(currentQuestion);