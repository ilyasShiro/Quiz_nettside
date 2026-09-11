let questions = ["Hva er gpu?","Hva gjør windows L?","Er github og git det samme?","hva er cpu?","Hva er css brukt for?",]
let answersleft = ["graphic card","låser pcen"]
let answersright = ["general power user","Nei","styling for nettsiden."]
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const sporsmal = document.getElementById("sporsmal")
let current = 0
sporsmal.textContent = questions[current]
button1.textContent = answersleft[current]
button2.textContent = answersright[current]


function answer1(){
    current++
    sporsmal.textContent = questions[current]
}