let quizLength = parseInt(localStorage.getItem("quizLength")) || 25

let shuffledQuestions = [...questions]
.sort(() => Math.random() - 0.5)
.slice(0, quizLength)

let currentQuestion = 0
let score = 0

const optionLabels = ["A","B","C","D"]

function loadQuestion(){

let q = shuffledQuestions[currentQuestion]

document.getElementById("question").innerText =
(currentQuestion+1) + ". " + q.question

let optionsHTML = ""

q.options.forEach((opt,index)=>{

optionsHTML += `
<button class="option" onclick="selectAnswer(${index})">
${optionLabels[index]}. ${opt}
</button>
`

})

document.getElementById("options").innerHTML = optionsHTML

updateScoreboard()
}

function selectAnswer(index){

if(index === shuffledQuestions[currentQuestion].answer){
score++
}

nextQuestion()
}

function nextQuestion(){

currentQuestion++

if(currentQuestion >= shuffledQuestions.length){

document.querySelector(".container").innerHTML =
"<h2>Quiz Finished</h2><p>Your Score: "+score+" / "+quizLength+"</p><button onclick='location.href="index.html"'>Restart</button>"

}else{

loadQuestion()

}

}

function updateScoreboard(){

document.getElementById("scoreboard").innerText =
"Score: " + score + " / " + quizLength

}

loadQuestion()
