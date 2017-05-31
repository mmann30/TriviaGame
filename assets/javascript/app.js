// Trivia Game JS

var position = 0; 	// question number
var correct = 0; 	// number of questions answered correctly
var incorrect = 0;	// number of questions answered incorrectly
var timer;			// diplayed time remaining to answer

var intervalId;
var timerInterval;

// array of [quiz questions, choices 1-4, answer].
var arrQuestions = [
	["How many pounds of food do Giraffes eat in a day?", "100 lbs", "75 lbs", "50 lbs", "25 lbs", "75 lbs"],
	["How long is a Giraffe's tongue?", "32 inches", "24 inches", "18 inches", "12 inches", "18 inches"],
	["How long is a Giraffe's tail?", "8 ft", "6 ft", "4 ft", "2 ft", "8 ft"],
	["In what biome are Giraffes found?", "Tundra", "RainForest", "Desert", "Savanna", "Savanna"]
];

function displayMenu() {
	$("#quiz-content").hide();
	$("#score").hide();
	$("#main-menu").show();
}

function displayScore(){
	// clears quiz content
	clear()
	clearInterval(timerInterval);
	$("#quiz-content").hide();
	// shows score
	$("#correct").html(correct);
	$("#incorrect").html(incorrect);
	$("#score").show();
	resetQuiz();
}

function displayQuiz(){
	// Clears screen
	clear()
	$("#score").hide();
	$("#main-menu").hide();

	// Show quiz content
	$("#quiz-content").show();
	$("#timer-value").html(timer);
	$("#question-text").html(arrQuestions[position][0]);
	
	// renders choice buttons
	for( i = 1; i < arrQuestions[position].length - 1; i++){
		$('<button>',{
			id: "btn_" + i,
			class: "btn btn-primary",
			value: arrQuestions[position][i],
			text: arrQuestions[position][i],
			click: function(){
				var userChoice = this.value;
				if(userChoice === arrQuestions[position][i]){
					correct++
				}else{
					incorrect++
				}
				nextQuestion();
			}
		}).appendTo("#choices");
	}
}

// clears quiz content
function clear(){
	$("#questions").empty();
	$("#choices").empty();
}

function nextQuestion() {	
	// increments position to display next question
	position++;
	// Checks quiz progress
	if(position < arrQuestions.length){
		resetTimer();
		displayQuiz();
	}else{
		$("#questions").empty();
		displayScore();
	}
}

function timerValue() {
	if(timer > 0 ){
		timer--
	}else if(timer === 0){
		nextQuestion();
	}
	$("#timer-value").html(timer);
}

function resetTimer(){
	clearInterval(timerInterval);
	timer = 20;
	timerInterval = setInterval(timerValue, 1000);
}

function startQuiz(){
	resetQuiz();
	resetTimer()
	displayQuiz();
}

function resetQuiz(){
	correct = 0;
	incorrect = 0;
	position = 0;
}

// Button Controllers
$("#start").click(startQuiz);
$("#try-again").click(startQuiz);
$("#quit").click(displayMenu);
