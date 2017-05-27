// Trivia Game JS


var timer = 30;
var intervalId;  // holds timer count down interval

$("#display-timer").html(timer);


intervalId = setInterval(countDown, 1000);





// Functions
function reset(){
	timer = 30;
}

function countDown(){
	timer--
	$("#display-timer").html(timer);
}

