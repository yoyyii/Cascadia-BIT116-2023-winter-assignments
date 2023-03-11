// YOUR NAME GOES HERE <----------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BIT 116 ASSIGNMENT 4: STATE CAPITAL GUESSING GAME JAVASCRIPT (TO BE COMPLETED AS PER COMMENT INSTRUCTIONS)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
	INSTRUCTIONS:
	-------------
	Follow the Instructions through each of the nine (9) parts commented in the code below, replace each of the placeholders 
	labelled CODE GOES HERE with the line of code that pertains to the coinciding instruction and step number.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
	INSTRUCTIONS: Part 1
	--------------------
	(1) Create a new array called 'city'
	(2) Initialize the city array with the 50 state capitals. A list of the state capitals is supplied under CITIES in the data.txt file for you to use as a reference only (I thought supplying this list would save you the time of having to "Google" them). This data.txt file is meant solely as a resource for copy-and-paste purposes. Please don't try to import it programmatically into your code. Use it only as a reference.
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let city = new Array(); 
city = ["MONTGOMERY", "JUNEAU","PHOENIX","LITTLE ROCK","SACRAMENTO","DENVER","HARTFORD","DOVER",
	"TALLAHASSEE","ATLANTA","HONOLULU","BOISE","SPRINGFIELD","INDIANAPOLIS","DES MOINES",
	"TOPEKA","FRANKFORT","BATON ROUGE","AUGUSTA","ANNAPOLIS","BOSTON","LANSING","SAINT PAUL",
	"JACKSON","JEFFERSON CITY","HELENA","LINCOLN","CARSON CITY","CONCORD","TRENTON","SANTA FE",	
	"ALBANY","RALEIGH","BISMARK","COLUMBUS","OKLAHOMA CITY","SALEM","HARRISBURG","PROVIDENCE",
	"COLUMBIA","PIERRE","NASHVILLE","AUSTIN","SALT LAKE CITY","MONTPELIER","RICHMOND","OLYMPIA",
	"CHARLESTON","MADISON","CHEYENNE"];


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
	INSTRUCTIONS: Part 2
	--------------------
	(1) Create a new array called 'state'
	(2) Initialize the city array with the 50 states. A list of the states is supplied under CITIES in the data.txt file for you to use as a reference only (I thought supplying this list would save you the time of having to "Google" them). This data.txt file is meant solely as a resource for copy-and-paste purposes. Please don't try to import it programmatically into your code. Use it only as a reference.
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let state = new Array(); 
state = ["ALABAMA","ALASKA","ARIZONA","ARKANSAS","CALIFORNIA","COLORADO","CONNECTICUT","DELAWARE",
	"FLORIDA","GEORGIA","HAWAII","IDAHO","ILLINOIS","INDIANA","IOWA","KANSAS","KENTUCKY","LOUISIANA",	
	"MAINE","MARYLAND","MASSACHUSETTS","MICHIGAN","MINNESOTA","MISSISSIPPI","MISSOURI","MONTANA",
	"NEBRASKA","NEVADA","NEW HAMPSHIRE","NEW JERSEY","NEW MEXICO","NEW YORK","NORTH CAROLINA",
	"NORTH DAKOTA","OHIO","OKLAHOMA","OREGON","PENNSYLVANIA","RHODE ISLAND","SOUTH CAROLINA",
	"SOUTH DAKOTA","TENNESSEE","TEXAS","UTAH","VERMONT","VIRGINIA","WASHINGTON","WEST VIRGINIA",
	"WISCONSIN","WYOMING"];

// array to hold the path of the images for the fifty state maps (no need to touch this)
var stateImage = new Array();
stateImage[0] = "images/alabama.png";
stateImage[1] = "images/alaska.png";
stateImage[2] = "images/arizona.png";
stateImage[3] = "images/arkansas.png";
stateImage[4] = "images/california.png";
stateImage[5] = "images/colorado.png";
stateImage[6] = "images/connecticut.png";
stateImage[7] = "images/delaware.png";
stateImage[8] = "images/florida.png";
stateImage[9] = "images/georgia.png";
stateImage[10] = "images/hawaii.png";
stateImage[11] = "images/idaho.png";
stateImage[12] = "images/illinois.png";
stateImage[13] = "images/indiana.png";
stateImage[14] = "images/iowa.png";
stateImage[15] = "images/kansas.png";
stateImage[16] = "images/kentucky.png";
stateImage[17] = "images/louisiana.png";
stateImage[18] = "images/maine.png";
stateImage[19] = "images/maryland.png";
stateImage[20] = "images/massachusetts.png";
stateImage[21] = "images/michigan.png";
stateImage[22] = "images/minnesota.png";
stateImage[23] = "images/mississippi.png";
stateImage[24] = "images/missouri.png";
stateImage[25] = "images/montana.png";
stateImage[26] = "images/nebraska.png";
stateImage[27] = "images/nevada.png";
stateImage[28] = "images/new_hampshire.png";
stateImage[29] = "images/new_jersey.png";
stateImage[30] = "images/new_mexico.png";
stateImage[31] = "images/new_york.png";
stateImage[32] = "images/north_carolina.png";
stateImage[33] = "images/north_dakota.png";
stateImage[34] = "images/ohio.png";
stateImage[35] = "images/oklahoma.png";
stateImage[36] = "images/oregon.png";
stateImage[37] = "images/pennsylvania.png";
stateImage[38] = "images/rhode_island.png";
stateImage[39] = "images/south_carolina.png";
stateImage[40] = "images/south_dakota.png";
stateImage[41] = "images/tennessee.png";
stateImage[42] = "images/texas.png";
stateImage[43] = "images/utah.png";
stateImage[44] = "images/vermont.png";
stateImage[45] = "images/virginia.png";
stateImage[46] = "images/washington.png";
stateImage[47] = "images/west_virginia.png";
stateImage[48] = "images/wisconsin.png";
stateImage[49] = "images/wyoming.png";

// Variables
var num = Math.floor(Math.random() * city.length);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
	INSTRUCTIONS: Part 3
	--------------------
	Directly below, do the following:
	(1) Declare a variable called 'cityName'
	(2) Declare a variable called 'stateName'
	(3) Declare a variable called 'stateMap'
	(4) Declare a variable called 'tries' and initialize it to zero
	(5) Declare a variable called 'score' and initialize it to zero
	(6) Declare a variable called 'topScore' and initialize it to zero
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cityName;
let stateName;
let stateMap;
let tries = 0;
let score = 0;
let topScore = 0;

// guessIt() Function (The main work horse of the guessing game; no need to touch this)
function guessIt(){
	var guess = document.form1.guess1.value;
	tries++;
	window.status = "Tries: " + tries;
	
	switch(tries)
	{
		case 1: document.form1.hint.value = "FIRST Hint: The state capital starts with \' " + 
		           cityName.charAt(0) + " \'";
				document.form1.stateClue.value = ""; // This removes the line of instructions
				break;
		case 2: document.form1.hint.value = "SECOND Hint: The state capital ends with \' " + 
		           cityName.charAt(cityName.length - 1).toLowerCase() + " \'";
				break;
		case 3:	document.form1.hint.value = "THIRD Hint: The second letter in name is \' " + 
		           cityName.charAt(1).toLowerCase() + " \'";
				break;
		default:document.form1.hint.value = "LAST Hint: The state capital has " + 
		           cityName.length + " characters";
				break;
	}
	
	if(guess.toUpperCase() == cityName) // Checks if guess equals cityName after converting to UPPERCASE
	{
		switch(tries)
		{
			case 1:	score += 10; // Awards 10 points for correct first guess
					break;
			case 2: score += 8 // Awards 8 points for correct second guess
					break;
			case 3:	score += 6; // Awards 6 points for correct third guess
					break;
			case 4: score += 4; // Awards 4 points for correct fourth guess
					break;
			default: score += 0; // Awards 0 points for correct no correct guess
		}
		alert("You are CORRECT!\n\nThe state capital of " + stateName.toTitleCase() + 
		      " is " + cityName + ".\n\nPlease hit OK for your next question");
      	document.form1.current1.value = "Current Score: " + score;
		if(score > topScore)
		{
			topScore = score;
			document.form1.top1.value = "High Score: " + topScore;
		}
		resetGame();
		localStorage.setItem("highScore", topScore); // HTML5 Storage saves the high score right in the browser (slick!)
	}
	else
	{
		if(tries == 5) // Game over without a correct guess
		{
			if(window.confirm("Sorry! You have run out of guesses.\n\nThe state capital of " + 
			   stateName.toTitleCase() + " is " + cityName +".\n\nDo you want to play again?"))
			{
				newGame(); // Reloads the game				
			}
		}
 	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 4
	--------------------
	Directly below, you are going to build out the resetGame() function with the following lines of code:
	(1)  num = Math.floor(Math.random() * city.length); // USE AS IS; Randomly selects a number based on length of city array
	(2)  Associate city[num] to cityName // Selects a state capital based on the generated number
		 BLATANT HINT: cityName = city[num];
	(3)  Associate state[num] to StateName // Selects a state based on the generated number
		 HINT: See above hint
	(4)  Associate stateImage[num] to stateMap // Selects a state map based on the generated number
		 HINT: See above hint
	(5)  Reset 'tries' to zero // Resets tries back to zero
	(6)  document.showState.src = stateMap; // USE AS IS; Shows selected state map from image pool
	(7)  document.form1.hint.value = "The state to guess is: " + stateName.toTitleCase() + "."; // USE AS IS; Shows name of current state
	(8)  document.form1.stateClue.value = "Enter the state capital below and click Guess"; // USE AS IS; Gives some Instructions
	(9)  document.form1.guess1.value = ''; // USE AS IS; resets value of guess1 textbox back to empty
	(10) Call the unDisable() function // Makes the Guess button clickable. Button was disabled so user couldn't use before the game loaded
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function resetGame() {
	num = Math.floor(Math.random() * city.length);
	cityName = city[num];
	stateName = state[num];
	stateMap = stateImage[num];
	tries = 0;
	document.showState.src = stateMap;
	document.form1.hint.value = "The state to guess is: " + stateName.toTitleCase() + ".";
	document.form1.stateClue.value = "Enter the state capital below and click Guess";
	document.form1.guess1.value = ''; 
	unDisable();
}

// catchKeyCode() Function (no need to touch this)
function catchKeyCode()
{
	if(event.keyCode == 13)
	{
		guessIt();
	}
}

// guessStatus() Function (HTML5 storage element that gets the high score from its save location in  browser, with error handling; no need to touch this)
function guessStatus(){
	window.status = "Tries: " + tries;
	if(typeof(Storage) !== "undefined")
  	{
  		var temp1 = localStorage.getItem("highScore");
  		var temp2 = parseInt(temp1); // The parseInt() function parses a string and returns an integer, necessary for making comparisons
  
		if(temp2 > topScore)
		{
			topScore = temp2;
			document.form1.top1.value = "High Score: " + topScore;
		}
	}
	else
	{
  		alert("Sorry, this browser version does not support HTML5 Local Storage, and your High Score will not be saved.");
  	}
}

// clearBox() Function - This clears the guess textbox if user changes mind
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 5
	--------------------
	Directly below, you are going to build out the clearBox() function with the following line of code:
	(1) Reset the guess1 value back to empty string
	    HINT: You may have seen this elsewhere in the code (and in Assignment 2)
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function clearBox(){
	document.form1.guess1.value = ''; 
	guess1 = ''
	guessStatus();
}

// newGame() Function - Sets up new game with a call to resetGame(), zeros out the Current Score
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 6
	--------------------
	Directly below, you are going to build out the newGame() function with the following lines of code:
	(1) Reset score back to zero
	(2) Reset current1 value to "Current Score: " + score
	    HINT: You may have seen this elsewhere in the code
	(3) Call the resetGame() function
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function newGame(){
	score = 0;
	document.form1.current1.value = "Current Score: " + score;
	resetGame()
}

// resetEverything() Function - Puts everything back to default settings, removes the High Score, displays start up image
function resetEverything(){
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 7
	--------------------
	Directly below, you are going to build a confirm box in the if statement of the resetEverything() function with the following:
	(1) Using the start of the if statement, confirm the following message warning the user about selecting Reset (the message needs properly 
		formatted with newline breaks): 
		
		ARE YOU SURE YOU WANT TO RESET YOUR GAME?
		 		
		BIG WARNING: This will reset the game to its default settings and clear your HIGH SCORE.
		
		Click 'Cancel' if you do NOT want to lose your High Score, otherwise click 'OK'.
		
	
	HINT: There is a confirm used earlier in the code that you can use as a reference.
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 7(1) CODE GOES HERE <--
	const confirm = window.confirm('ARE YOU SURE YOU WANT TO RESET YOUR GAME?\n\nBIG WARNING:This will reset the game to its default settings and clear your HIGH SCORE.\n\nClick \'Cancel\' if you do NOT want to lose your High Score, otherwise click \'OK\'.')
	if (confirm) {
		score = 0;
		topScore = 0;
		document.form1.current1.value = "Current Score: " + score; // Zeros out Current Score display
		document.form1.top1.value = "Top Score: " + topScore; // Zeros out High Score display
		
		localStorage.removeItem("highScore"); // Removes the High Score from HTML5 storage
		
		document.showState.src = "images/a_guessing_game.png"; // Displays start up image
		document.form1.stateClue.value = "Press 'New' to play again.";
		document.form1.hint.value = "The game has been reset to default settings.";
		window.location.reload(); // Does the same thing as the refresh button in the browser
		disable(); // Prevents user from clicking Guess before the new game actually loads
	}
}

// Function to change UPPERCASE string to Titlecase using a global REGULAR EXPRESSION
String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 8
	--------------------
	Directly below, you are going to build out an unDisable() function with the following line of code:
	(1) Using getElementbyId, set 'guessBtn' disabled to false (in the HTML)
		HINT: This will follow the format d.g('g').d = f;
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function unDisable() { // Function to programmatically enable a disabled button
	// 8(1) CODE GOES HERE <--
	document.getElementById('guessBtn').disable = false
} 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/* 
	INSTRUCTIONS: Part 9
	--------------------
	Directly below, you are going to build out a disable() function with the following line of code:
	(1) Using getElementbyId, set 'guessBtn' disabled to true (in the HTML)
		HINT: This will follow the format d.g('g').d = t;
*/	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function disable() { // Function to programmatically disable an enabled button
	// 9(1) CODE GOES HERE <--
	document.getElementById('guessBtn').disable = true
} 





