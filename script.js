//variables
var gameStarted = false;
var timerInterval;
var tickSound = new Audio("sounds/ticktock.wav");
var startTime;

//getting all useful elements using jquery
var playButton = $("#playButton")

//other functions
function getMsElapsed() {
    return Date.now() - startTime;
}

function getSecondsElapsed() {
    return Math.floor(getMsElapsed() / 1000)
}


//hiding all uiSets that arent shown at the start
$( document ).ready(function() {
    $("#gameStarted").hide();
});

//play button pressed
function playButtonPressed() {
    gameStarted = true;
    $("#gameNotStarted").hide();
    $("#gameStarted").show();
    startTime = Date.now()
    tickSound.play()
    timerInterval = setInterval(function() {
        tickSound.play()
        $("#secondsElapsed").text("Seconds elapsed: " + getSecondsElapsed())
    }, 1000)
}
