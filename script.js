var timerDiv = document.querySelector("#timer");
var startBtn = document.querySelector("#startbtn");
var containter = document.querySelector("#container");
var questionContainer = document.querySelector("#questionContainer");
var choices = document.querySelector("#choices");
var question = document.querySelector("#question");
var countDown = document.querySelector("#countDown");
var choiceA = document.querySelector("#A");


var currentQuestion = [
    {
        question: "Arrays can be used to store _____?",
        choiceA: "Numbers and strings",
        choiceB: "Other arrays",
        choiceC: "Booleans",
        choiceD: "All of the above",
        correct:  "D"

        question: "Commonly used data types do not include _____?",
        choiceA: "Strings",
        choiceB: "Booleans",
        choiceC: "Alerts",
        choiceD: "Numbers",
        correct:  "C"

        question: "The  Condition in an if/else statment is enclosed within _____?",
        choiceA: "Quotes",
        choiceB: "Curly Brackets",
        choiceC: "Parenthases",
        choiceD: "Square brackets",
        correct:  "C"

        question: "String values must be enclosed within _____ when being assigned to variables?",
        choiceA: "Commas",
        choiceB: "Curly Brackets",
        choiceC: "Quotes",
        choiceD: "Parenthases",
        correct:  "C"

},

]

var runningQuestion = 0;


function renderQuestion(){
var qIndex = currentQuestion[runningQuestion];
question.innerHTML = "<p>" + qIndex.question + "</p>";
choiceA.innerHTML = qIndex.choicesA;
choiceB.innerHTML = qIndex.choicesB;
choiceC.innerHTML = qIndex.choicesC;
choiceD.innerHTML = qIndex.choicesD;
}

startBtn.addEventListener("click",startQuiz);

function startQuiz(){
    renderQuestion();
    
}

function startTimer(){



}
