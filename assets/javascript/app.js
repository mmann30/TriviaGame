// Trivia Game JS

var position = 0; 	// question number
var correct = 0; 	// number of questions answered correctly
var incorrect = 0;	// number of questions answered incorrectly
var timer;			// diplayed time remaining to answer

var intervalId;
var timerInterval;

// array of quiz questions, choices, and answers.
var arrQuestions = [
	["Q1", "C1.1", "C1.2", "C1.3", "C1.4", "C1.1"],
	["Q2", "C2.1", "C2.2", "C2.3", "C2.4", "C2.2"],
	["Q3", "C3.1", "C3.2", "C3.3", "C3.4", "C3.3"],
	["Q4", "C4.1", "C4.2", "C4.3", "C4.4", "C4.4"]
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
	$("#question").html(arrQuestions[position][0]);
	
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
