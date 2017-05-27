// Trivia Game JS


var timer = 3;
var intervalId;  // holds timer count down interval

$("#display-timer").html(timer);


intervalId = setInterval(countDown, 1000);



// Functions //

// Resets the timer to 30 seconds
function reset(){
	timer = 30;
}

// Timer counts down to zero
function countDown(){
	if(timer > 0){
		timer--
		$("#display-timer").html(timer);
	}else{
		alert("Times Up");
		clearInterval(intervalId);
	}
}

