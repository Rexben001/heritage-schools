var login = JSON.parse(localStorage.getItem('login'));

var name = login.name;

document.getElementById('login').innerHTML = 'You are logged in as ' + '<strong>' + name + '&#9786&#10084</strong>';


//Retreive quizzes stored into local storage
var qz = JSON.parse(localStorage.getItem("cisco"));
if (qz === null || qz === '') {
    document.getElementById('quiz').innerHTML = "<div id='error'><strong> Service is down, check back later <br> &#9786</strong></div>"
    throw new Error('Check back later');
}

var accEn = [];


for (var i = 0; i < qz.length; i++) {

    //Check if the id is English
    if (qz[i].classes.toLowerCase() === login.classs.toLowerCase()) {
        document.getElementById('subject').innerHTML = 'CISCO';
        var que = qz[i];
        var qArray = Object.values(qz[i]);

        accEn.push(new Question(qArray));
        if (que === null || accEn === '') {
            document.getElementById('quiz').innerHTML = "<div id='error'><strong> We don't have an quiz for this particular section. Pls, do check back. \
        Sorry for the incoveniences <br> &#9786</strong></div>"
            throw new Error('Check back');
        }
    }


}

var quiz = new Quiz(accEn);




//Correct answer
function guess(id, guess) {
    var element = document.getElementById(id);
    element.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

//Show thw scores
function showScores() {

    var login = JSON.parse(localStorage.getItem('login'));

    var name = login.name;
    var percent = (quiz.score / quiz.questions.length) * 100;
    var newScore = quiz.score / 2;
    var game = '<h1 >Result</h1>';
    game += '<h2 id="score">Welldone ' + name + '</h2>'
    game += '<h2 id="score">Your scores: ' + quiz.score + '</h2> \
    <br> <h2 id="score">Your percentage score is: ' + percent.toFixed() + '%</h2><br>'
    var element = document.getElementById('quiz');
    element.innerHTML = game;
    var result = {
        name: login.name,
        score: newScore.toFixed(),
        class: login.classs
    }

    if (localStorage.getItem('totalResults') === null) {
        var totalResults = [];
        totalResults.push(result);
        localStorage.setItem('totalResults', JSON.stringify(totalResults));
    } else {
        var totalResults = JSON.parse(localStorage.getItem("totalResults"));
        totalResults.push(result);
        localStorage.setItem('totalResults', JSON.stringify(totalResults));
    }
}

//reset the quiz
function reset() {
    location.reload();

}
//Show progress of the quiz below
//Question 1 0f 4
function showProgress() {
    var questionNo = quiz.questionIndex + 1;
    var ele = document.getElementById('progress');
    ele.innerHTML = 'Question ' + questionNo + ' of ' + quiz.questions.length;

}

populate();

//Populate the quiz with questions provided it is still available
function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;

        //Populate the buttons with the options
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById('choice' + i);
            element.innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }
        showProgress();
    }

}



function check() {
    location.href = 'quiz.html';
}

document.getElementById('myForm').addEventListener('submit', check);

function check(link) {

    location.href = link;
}


//Setting the timer for each quiz
var sec = 60 - 1, min = '0' + 9;
var time = document.getElementById('timey');


var interval = setInterval(function () {
    sec--;
    if (sec < 10) {
        sec = '0' + sec;
    }


    if (sec == 0) {
        sec = 60 - 1;
        min--;
        if (min < 10) {
            min = '0' + min;
        }
    }
    time.innerHTML = min + " : " + sec;
    // console.log(time.textContent);

    if (time.textContent === '01 : 00') {
        document.getElementById('timey').style.color = 'red';
        blinkElement(time, 500, 210000);
    }

    if (time.textContent === '00 : 01') {
        showScores();
        clearInterval(interval);
        console.log(time.textContent);
    }
}, 1000);



function blinkElement(elm, interval, duration) {
    elm.style.visibility = (elm.style.visibility === 'hidden' ? 'visible' : 'hidden');

    if (duration > 0) {
        setTimeout(blinkElement, interval, elm, interval, duration - interval);
    } else {
        elm.style.visibility = 'visible';
    }
}

