// cities.js - JavaScript for BIT116 Assignment 2: Cities of Washington Guessing Game
//#####################################################################################################

// Declare an array to hold the city names
///////////////////////////////////////////////////////////////////////////////////////////////////////
/* 	INSTRUCTIONS: Part 1
	
	(1) Declare an array called 'city'
	(2) Initialize the array elements with these city names (in UPPERCASE letters):
		BELLEVUE
		BOTHELL
		DUVALL
		EDMONDS
		KENMORE
		KIRKLAND
		LAKE FOREST PARK
		LYNNWOOD
		MONROE
		MOUNTLAKE TERRACE
		REDMOND
		SEATTLE
		SHORELINE
		TACOMA
		WOODINVILLE
*/
let city = ["BELLEVUE", "BOTHELL", "DUVALL", "EDMONDS",	"KENMORE", "KIRKLAND", "LAKE FOREST PARK",
		"LYNNWOOD",	"MONROE", "MOUNTLAKE TERRACE", "REDMOND", "SEATTLE", "SHORELINE", "TACOMA",	"WOODINVILLE"];
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Generates a random number based on length of city array
var num = Math.floor(Math.random() * city.length);

// Stores the city name 
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* 	INSTRUCTIONS: Part 2

	(1) Declare a variable called cityName
	(2) Initialize it with city[num]

*/
let cityName = city[num];
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Declare and initialize tries guessed
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* 	INSTRUCTIONS: Part 3

	(1) Declare a variable called tries
	(2) Initialize it with zero

*/
let tries = 0;
/////////////////////////////////////////////////////////////////////////////////////////////////////


// guessIt Function - the main function
function guessIt()
{
	/////////////////////////////////////////////////////////////////////////////////////////////////
	/* 	INSTRUCTIONS: Part 4

	(1) Declare a variable called guess.
	(2) Initialize it with the guess1 value. 
	    HINT: Look in existing code to see how this might be done
		HINT: Look for document.form1 and add/tweak accordingly
	(3) Increment tries (either tries++ or tries = tries + 1)
	(4) Display in your new HTML form field: "Tries : " + tries;
	    HINT: Look in existing code to see how this might be done

	*/
	
	let guess = document.getElementById('guess1').value;
	tries++;
	guessStatus();

	/////////////////////////////////////////////////////////////////////////////////////////////////
	
	/////////////////////////////////////////////////////////////////////////////////////////////////
	/* 	INSTRUCTIONS: Part 5

	(1) Create a switch here that is passed 'tries'
	(2) The first case (case 1) should do the following:
		a) Change the hint value to "First Hint: The city name starts with \'" + cityName.charAt(0) + "\'";
		   HINT: Look in existing code to see how this might be done
		b) break
	(2) The second case (case 2)
		a) Change the hint value to "Second Hint: The city name ends with \'" + cityName.charAt(cityName.length - 1) + "\'";
		   HINT: Look in existing code to see how this might be done
		b) break
	(2) The third case (case 3)
		a) Change the hint value to "Last Hint: The city name has " + cityName.length + " characters";
		   HINT: Look in existing code to see how this might be done
		b) break
	(5) The default
		a) Change the hint value to "No more hints available! Last chance to guess!";
		   HINT: Look in existing code to see how this might be done

	*/
	hintVal = document.getElementById('hintValue');
	switch (tries) {
        case 1:
			hintVal.value = "First Hint: The city name starts with \'" + cityName.charAt(0) + "\'";
            break;
        case 2:
			hintVal.value = "Second Hint: The city name ends with \'" + cityName.charAt(cityName.length - 1) + "\'";
            break;
		case 3:
			hintVal.value = "Last Hint: The city name has " + cityName.length + " characters";
			break;
        default:
            hintVal.value = "No more hints available! Last chance to guess!";
    }

	///////////////////////////////////////////////////////////////////////////////////////////

   if(guess.toUpperCase() == cityName) // Checks if guess equals cityName
   {
		if(window.confirm("You are correct!\n\nThe city was " + cityName + ".\n\nDo you want to play again?"))
      	{
			window.location.reload(); // Reloads the page for a new game
		}
	}
	else
   {
		if(tries == 5) // Game over without a correct guess
		{
			if(window.confirm("Sorry! You have run out of guesses.\n\nThe city was  " + cityName + ".\n\nDo you want to play again?"))
			{
				window.location.reload(); // Reloads the page for a new game
				document.form1.hint.value = "Enter a City name below and click Guess button!";
			}
		}
 	}
}

// catchKeyCode Function - calls when user presses Enter key
function catchKeyCode() //
{
	if(event.keyCode == 13)
	{
		guessIt();
	}
}

// guessStatus Function - Shows number of guesses

function guessStatus()
{
	document.getElementById('tries').innerHTML = "Tries: " + tries;
}

// clearBox Functions - clears the text box
///////////////////////////////////////////////////////////////////////////////////////////
/* 	INSTRUCTIONS: Part 6

	(1) Create a function called clearBox
	(2) Have the function reset the the value of guess back to empty
	    HINT: Look in existing code to see how this might be done

*/
function clearBox() {
	tries = 0;
	guessStatus();
}
///////////////////////////////////////////////////////////////////////////////////////////

// newGame Function - Sets up a new game
///////////////////////////////////////////////////////////////////////////////////////////
/* 	INSTRUCTIONS: Part 7

	(1) Create a function called newGame
	(2) Confirm if so by asking this message: "Do you want to start a new game?"
	    HINT: Look in existing code to see how this might be done
		HINT: Look for code that contains window.location and tweak accordingly
	(3) Then reload the page for the new game
	    HINT: Look in existing code to see how this might be done
	(4) Change the hint message back to: "Enter your guess below and click Guess button!"
	    HINT: Look in existing code to see how this might be done

*/

function newGame() {
	if(window.confirm("Do you want to start a new game?"))
      	{
			window.location.reload(); // Reloads the page for a new game
			hintVal.value = "Enter your guess below and click Guess button!";
		}
}
///////////////////////////////////////////////////////////////////////////////////////////