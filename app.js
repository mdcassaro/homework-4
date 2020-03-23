
//change buttons to purple
//add timer in corner
//need intial page

function Question(text, choices, answer){
    this.text=text;
    this.choices = choices
    this.answer = answer

}
function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}



var questions = [
    new Question("Which of these is not an animal?", ["cat", "dog", "bird", "tree"], "tree"),
    new Question("Which of these is a State?", ["Guam", "Kansas", "American Samoa", "Puerto Rico"], "Kansas" ),
    new Question("Which of these is not a fruit?", ["Lemons", "Grapes", "Bananas", "Cabbage"], "Cabbage" ),
    new Question("Which of these programs is not taught in this program?", ["HTML", "CSS", "JavaScript", "Python"], "Python" ),
]

Quiz.prototype.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
    return this.questions.length === this.questionIndex
}


Question.prototype.correctAnswer = function(choices) {
    return choices === this.answer;
}

Quiz.prototype.guess = function(answer){
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

}
function showScores(){
    var gameOverHTML = "<h1>Results</h1>";
    gameOverHTML += "<h2 id='score'>Your scores: " + quiz.score  + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;       
}

function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for( var i = 0; i< choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

    }

};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}







var quiz = new Quiz (questions);

populate();