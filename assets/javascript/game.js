// //Dom manipulation ------from HTML
Guessedletters_div = document.querySelector(".letters-guessed");
Curentword_div = document.querySelector(".current-word");
Randomletter_div= document.getElementById("random-letter");
Winnum_span = document.getElementById("winnumber");
Attemptsnum_span = document.getElementById("attempts");
Wins_div = document.querySelector(".Wins");
// //Dom manipulation ------from HTML 

//--------------------------> Global Variables
// //Make a word array for the game ------------->
const Gamechoice = (['disco','hippie','afro'])
//Chose the word randomly
let Xnum = Math.floor(Math.random() * Gamechoice.length);
let Chosenword = Gamechoice[Xnum];
let Underscore = [];
let Rightletter = [];
let Wrongletter = [];

//--------------------------> Global Variables
//make an underscore based on the length of word
function generateUnderscore () {
    for(x=0; x<Chosenword.length; x++) {
        Underscore.push("_")
    }
   return Underscore;
}
console.log(generateUnderscore());

//get users guess
document.addEventListener('keypress', (Keyfunct));
function Keyfunct () {
    let keyword = String.fromCharCode(event.keyCode);
    //correct letter
    if (Chosenword.indexOf(keyword) > -1 ) {
    //add right letter to array
        Rightletter.push(keyword);
    console.log(Rightletter);
    // replacing letter with underscore
    //adding wrong letter to the wrong letter array
   
    }}
//check if the guess is right

//if right push to right array
//if wrong push to the wrong array