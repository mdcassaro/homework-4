var highScoreCountSpan = document.querySelector("#high-score-count");
var highScores = [];
var highScoreList = document.querySelector("#high-score-list");
var scoreInput = document.querySelector("#highscore-text");
var scoreForm = document.querySelector("#initials")

init();

create();

function renderHighScores() {
    
    highScoreList.innerHTML = "";
    highScoreCountSpan.textContent = quiz.score ;
  
    
    for (var i = 0; i < highScores.length; i++) {
      var highScore = highScores[i];
  
      var li = document.createElement("li");
      li.textContent = highScore;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Erase";
  
      li.appendChild(button);
      highScoreList.appendChild(li);
    }
}

function init() {
    
    var storedScores = JSON.parse(localStorage.getItem("highscores"));
  
    
    if (storedScores !== null) {
      highScores = storedScores;
    }
  
    renderHighScores();
  }
  
  function storeScores() {
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
  
  
  scoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var scoreText = scoreInput.value.trim();
  
    
    if (scoreText === "") {
      return;
    }
  
   
    highScores.push(scoreText);
    scoreInput.value = "";
  
    
    storeScores();
    renderHighScores();
  });
  
  
  highScoreList.addEventListener("click", function(event) {
    var element = event.target;
  
    
    if (element.matches("button") === true) {
      
      var index = element.parentElement.getAttribute("data-index");
      highScores.splice(index, 1);
  
      
      storeScores();
      renderHighScores();
    }
  });
  