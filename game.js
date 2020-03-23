



Question.prototype.correctAnswer = function(choices) {
    return choices === this.answer;
}
// {/<h1>Timer</h1>
// <div id="timer-text">30 seconds left</div>
//put into html. probably replace footer*  */}


var ONE_SECOND = 1000;
var FIFTEEN_SECONDS = 15 * ONE_SECOND;


var secondsLeft = 30;


//every scond, we need to update the timer - setInterval, 1000
//after 15 seconds, chage color to red - setTimeout, 15000

var timerId = setInterval(function(){
    console.log("1 second has passed")
    //this happens every second
    secondsLeft--;
    console.log(secondsLeft);
    $("#timer-text").text(secondsLeft + " seconds left") 
    if(secondsLeft <=0){
        clearInterval(timerId);
    }

}, ONE_SECOND);

setTimeout(function(){
    $("#timer-text").addClass("danger");
}, FIFTEEN_SECONDS)

// {/* <style>
//     .danger{
//         color: ReadableStream;
//         font-weight: bold
//     }
// </style> */
//put in style in head