var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


		var winCounter = 0;
		var lossCounter = 0;
		var guessesRemainingCounter = 9;
		var guessesSoFarCounter = "";

	document.onkeyup = function(){
		

		console.log(userGuess);

		// getElementById("#winCounter");

		var computerGuess = letters[Math.floor(Math.random()*letters.length)];

		var userGuess = String.fromCharCode(event.keyCode).
			toLowerCase();

		console.log(computerGuess);

		$("#userWins").html("Wins: " + winCounter)
		console.log(winCounter)

		$("#userLosses").html("Losses: " + lossCounter)
		console.log(lossCounter)

		$("#userGuess").html("Guesses left: " + guessesRemainingCounter)
		console.log(guessesRemainingCounter)


		// document.getElementById((userGuess==computerGuess))  [wins++, document.getElementById("winCounter").innerHTML = ("winCounter: " + winCounter++)]


	};


// $(document).ready(function() {

// 	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	

// 	var computerGuess = letters[Math.floor(Math.random()*letters.length)];
// 	var userGuess = "";

// 	console.log(computerGuess);

// 	var winCounter = 0;
// 	var lossCounter = 0;
// 	var guessesRemainingCounter = 9;
// 	var guessesSoFarCounter = 0;

// 	for (var i = 0; i < letters.length; i++) {
// 		if (userGuess === computerGuess){
// 			winCounter++
// 		}
// 		else {
// 		}


			
// 	}


// 	document.onkeyup = function(){
// 		var userGuess = String.fromCharCode(event.keyCode);
// 		toLowerCase();

// 		console.log(userGuess);

// 		// getElementById("#winCounter");
// 		lossCounter++;
// 		guessesRemainingCounter--;


// 		$("#userWins").html("Wins: " + winCounter);
// 		console.log(winCounter);

// 		$("#userLosses").html("Losses: " + lossCounter);
// 		console.log(lossCounter);

// 		$("#userGuess").html("Guesses left: " + guessesRemainingCounter);
// 		console.log(guessesRemainingCounter);

// 		$("#soFar").append(userGuess);
// 		console.log(userGuess);
// 	};


// });