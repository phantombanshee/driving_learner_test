let currentQuestion = 0
let score = 0

function loadQuestion(){

let q = questions[currentQuestion]

document.getElementById("question").innerText = q.question

let optionsHTML = ""

q.options.forEach((opt,index)=>{

optionsHTML += `
<button onclick="selectAnswer(${index})">
${opt}
</button><br><br>
`

})

document.getElementById("options").innerHTML = optionsHTML

}

function selectAnswer(index){

if(index === questions[currentQuestion].answer){
score++
}

nextQuestion()

}

function nextQuestion(){

currentQuestion++

if(currentQuestion >= questions.length){

alert("Your Score: "+score+" / "+questions.length)

location.reload()

}else{

loadQuestion()

}

}

loadQuestion()
