$(document).ready(function() {

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


		var winCounter = 1;
		var lossCounter = 1;
		var guessesRemainingCounter = 8;
		var guessesSoFarCounter = "";
		var computerEntry
		var userEntry
		var randomletter = []

		computerEntry = letters[Math.floor(Math.random()*letters.length)];
		console.log(computerEntry);
	

	document.onkeyup = function(keyPressed) {
	userEntry = keyPressed.key;
	$("#soFar").append(userEntry)


		if (userEntry === computerEntry) {
					guessesSoFarCounter = "";
					$("#userWins").html("Wins: " + winCounter++)
					console.log(winCounter)
					computerEntry = letters[Math.floor(Math.random()*letters.length)];
					console.log(computerEntry);
				};

		if (userEntry != computerEntry){
			$("#userGuess").html("Guesses left: " + guessesRemainingCounter--);
			console.log(guessesRemainingCounter);
		}

		if (guessesRemainingCounter < 0) {
			guessesRemainingCounter = 9
			$("#userGuess").html("Guesses left: " + guessesRemainingCounter);
			$("#userLosses").html("Losses: " + lossCounter++);
			$("#soFar").html("");
			console.log(lossCounter);
			computerEntry = letters[Math.floor(Math.random()*letters.length)];
			console.log(computerEntry);

		}

			}
			
			

			
			
			
});