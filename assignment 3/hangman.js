// Yoyi Liao<----------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BIT 116 ASSIGNMENT 3: HANGMAN GAME JAVASCRIPT (TO BE COMPLETED AS PER COMMENT INSTRUCTIONS)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
	INSTRUCTIONS:
	-------------
	Follow the Instructions through each of the seven parts commented in the code below, replace each of the placeholders labeled
	CODE GOES HERE with the line of code that pertains to the coinciding instruction and step number.
	
	EXAMPLE: 
	--------
	
	After reading INSTRUCTIONS: Part 1 Step (1) below, you'd replace: 
	
		// 1(1) CODE GOES HERE <--
	
	with:
	
		var guessesRemaining = 0;
		
*/

var canPlay = true;
var words = new Array("WASHINGTON", "JAVASCRIPT", "PROGRAMMING", "COFFEE", "CASCADIA", "INTERNET", "SEATTLE", "REX WINKUS", "NEW YORK CITY", "NIGHTMARE", "LED ZEPPELIN", "BEATLES", "HAMBURGER", "SEAHAWKS", "JQUERY"); 

var toGuess = "";
var displayWord = "";
var usedLetters = "";
var wrongGuesses = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
	INSTRUCTIONS: Part 1
	(1) Declare a variable called  'guessesRemaining' to show number of remaining guesses and initialize it to zero
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var guessesRemaining = 0;

function selectLetter(c) // c is the variable space where a letter will be passed
{
	if (canPlay == false)
	{
		return;
	}

	if (usedLetters.indexOf(c) != -1) 
	{
		return;
	}
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
	INSTRUCTIONS: Part 2
	(1) Using the plus-equal assignment operator (+=), assign a c to usedLetters 
	    HINT: u += c; 
	(2) In the JavaScript, assign the running "value" of 'usedLetters' to the <input> textbox named "usedLetters" in the "game" form in the HTML "document" 
	    HINT: You would do this with dot notation, first pointing to the form called "game", then the input box called"usedLetters", 
		then the "value". 
		
		This would follow the format: x.y.z = y;
		
		HINT: Look at existing code to see how this might be done.
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	usedLetters += c; 
	game.usedLetters.value = usedLetters; 

	if (toGuess.indexOf(c) != -1)
	{
		
		// correct letter guess
		var position = 0;
		var tempMask = displayWord;

		while (toGuess.indexOf(c, position) != -1)
		{
			position = toGuess.indexOf(c, position);			
			var end = position + 1;

			var startText = tempMask.substring(0, position);
			var endText = tempMask.substring(end, tempMask.length);

			tempMask = startText + c + endText;
			position = end;
		}

		displayWord = tempMask;
		document.game.displayWord.value = displayWord;
		
		if (displayWord.indexOf("*") == -1)
		{
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 3
	(1) Directly below, extend the message of the alert to include the message that the user correctly guessed the secret word 
	    called "toGuess".
	    HINT: This can be done with the concatenation operator
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			alert("Well done, you have won! The secret word is " + toGuess); // 3(1) CODE GOES IN HERE <--
			canPlay = false;
		}
	}
	else
	{
		// incorrect letter guess
		wrongGuesses += 1;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 4
	(1) Directly below, assign to "guessesRemaining" the value of 10 minus "wrongGuesses"
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		guessesRemaining = 10 - wrongGuesses; 
		
		eval("document.hm.src=\"hm" + wrongGuesses + ".gif\""); // Changes game image based on current number of wrong guesses
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 5
	Directly below:
	(1) Assign the running "value" of 'wrongGuesses' to the <input> textbox named "wrongGuesses" in the "game" form in the HTML "document" 
	(2) Assign the running "value" of 'guessesRemaining' to the <input> textbox named "remainingGuesses" in "game" form in the "document" 
	    HINT: Pay attention to the difference between the names 'guessesRemaining' and "remainingGuesses"
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		game.wrongGuesses.value = wrongGuesses; 
		game.remainingGuesses.value = guessesRemaining; 

		if (wrongGuesses == 10)
		{
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 6
	(1) Directly below, extend the message of the alert() to tell the user what the secret word was using "toGuess".
	    HINT: This can be done with the concatenation operator
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			alert("Sorry, you have lost! The secret word is " + toGuess); // 6(1) CODE GOES IN HERE <--
			canPlay = false;
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 7
	Directly below, you are going to build out the reset() function with the following lines of code:
	(1) Call the selectWord() function
	(2) Reset the "value" of the <input> textbox named "usedLetters" in the "game" form in the HTML "document" back to empty string
	(3) Reset the "value" of the <input> textbox named "remainingGuesses" in the "game" form in the HTML "document" back to 10
	(4) Reset the "value" of the <input> textbox named "wrongGuesses" in the "game" form in the HTML "document" back to zero
	(5) Reset 'usedLetters' back to empty string
	(6) Reset 'wrongGuesses' back to zero
	(7) Reset the game image named 'hm' back to "hmstart.gif" using document.hm.src
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function reset() 
{
	selectWord();
	game.usedLetters.value = ""
	game.remainingGuesses.value = 10; 
	game.wrongGuesses.value = 0; 
	usedLetters = ""; 
	wrongGuesses = 0; 
	document.hm.src = 'hmstart.gif';

}

// Randomly selects a word from the 'word' array based on length of the array
function selectWord()
{
	canPlay = true;
	var randomNumber = Math.round(Math.random() * (words.length - 1));
	toGuess = words[randomNumber]; // Assigns the random number to an indexd element of 'word' array
	
	// display masked word
	var maskedWord = createMask(toGuess); // Calls createMask() function to replace letters of word with asterisks
	document.game.displayWord.value = maskedWord; // Fills the displayWord input textbox with the masked word
	displayWord = maskedWord;
}

// Masks the letters of the selected word from the 'word' array with asterisk character (*)
function createMask(word)
{
	var mask = "";
	var wordLength = word.length;

	for (i = 0; i < wordLength; i++)
	{
		mask += "*";
	}
	return mask;
}