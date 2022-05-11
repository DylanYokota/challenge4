var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// DOM Selectors
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var resultEl = document.getElementById("question-result");
var startBtn = document.getElementById("start");
var countdownEl = document.getElementById("countdown");

function startQuiz(){
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    
    questionsEl.removeAttribute("class");  

    clockTimer();

    generateQuestion();
    }

function generateQuestion(){
    var currentQuestion = questions[currentQuestionIndex];

    console.log(questions.title)
}

function checkAnswer(){

}

function finishQuiz(){
    

}

function clockTimer(){
    var time = 45;

    var timer = setInterval(function(){
        countdownEl.innerHTML = time;
        time--;
        if(time < 0){
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);
}

function saveHighscore(){

}

startBtn.onclick = startQuiz;

