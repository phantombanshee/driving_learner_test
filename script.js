let quizLength = parseInt(localStorage.getItem("quizLength")) || 25;

// shuffle questions
let shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

// select quiz length
shuffledQuestions = shuffledQuestions.slice(0, quizLength);

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const optionLabels = ["A","B","C","D"];

function loadQuestion(){

let q = shuffledQuestions[currentQuestion];

document.getElementById("question").innerText =
(currentQuestion + 1) + ". " + q.question;

document.getElementById("progress").innerText =
"Question " + (currentQuestion + 1) + " / " + quizLength;

let optionsHTML = "";

q.options.forEach((opt,index)=>{

optionsHTML += `
<button class="option" onclick="selectAnswer(${index}, this)">
${optionLabels[index]}. ${opt}
</button>
`;

});

document.getElementById("options").innerHTML = optionsHTML;

document.getElementById("nextBtn").disabled = true;

updateScoreboard();

}

function selectAnswer(index, element){

selectedAnswer = index;

let buttons = document.querySelectorAll(".option");

buttons.forEach(btn => btn.style.background = "white");

element.style.background = "#d0ebff";

document.getElementById("nextBtn").disabled = false;

}

function nextQuestion(){

if(selectedAnswer === shuffledQuestions[currentQuestion].answer){
score++;
}

currentQuestion++;
selectedAnswer = null;

if(currentQuestion >= shuffledQuestions.length){

let percent = Math.round((score/quizLength)*100);

let result = percent >= 70 ? "PASS" : "FAIL";

document.querySelector(".container").innerHTML = `
<h2>Quiz Finished</h2>
<p>Your Score: ${score} / ${quizLength}</p>
<h3>${result}</h3>
<button onclick="location.href='index.html'">Restart</button>
`;

}else{

loadQuestion();

}

}

function updateScoreboard(){

document.getElementById("scoreboard").innerText =
"Score: " + score + " / " + quizLength;

}

loadQuestion();
