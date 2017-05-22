$(document).ready(function() {

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


		var winCounter = 1;
		var lossCounter = 0;
		var guessesRemainingCounter = 8;
		var guessesSoFarCounter = "";
		var computerEntry
		var userEntry
		var randomletter = []

		computerEntry = letters[Math.floor(Math.random()*letters.length)];
		console.log(computerEntry);
	

	document.onkeyup = function(keyPressed) {
	userEntry = keyPressed.key;
	$("#soFar").html("Guesses so far: " + userEntry)


		if (userEntry === computerEntry) {
					guessesSoFarCounter = "";
					$("#userWins").html("Wins: " + winCounter++)
					console.log(winCounter)
					$("#randomLetter")
				};

		if (userEntry != computerEntry){
			$("#userGuess").html("Guesses left: " + guessesRemainingCounter--);
			console.log(guessesRemainingCounter);
		}

		if (guessesRemainingCounter < 1) {
			$("#guessesRemainingCounter")[0].reset();

		}

			}
			$("#userLosses").html("Losses: " + lossCounter--);
			console.log(lossCounter);
			

			
			
			
});