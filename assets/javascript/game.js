// //Dom manipulation ------from HTML
let Guesses_left = 10;
let Letters_correct = 0;
let Guessedletters_div = document.querySelector(".Letters-Used");
let Currentword_div = document.querySelector(".current-word");
let Winnum_span = document.getElementById("winnumber");
let Attemptsnum_span = document.getElementById("attempts");
// //Dom manipulation ------from HTML 

//--------------------------> Global Variables
// //Make a word array for the game ------------->
const Gamechoice = (['disco','home','afro', 'ass'])
//Chose the word randomly
let Xnum = Math.floor(Math.random() * Gamechoice.length);
let Chosenword = Gamechoice[Xnum];
let Underscore = [];
let Rightletter = [];//new Array(Gamechoice.length);
let Wrongletter = [];

//--------------------------> Global Variables
//make an underscore based on the length of word
function generateUnderscore () {
    for(var x=0; x<Chosenword.length; x++) {
        Underscore.push("_");
    }
   return Underscore;
}
//get users guess
joinit();
document.addEventListener('keypress', (Onkey)) 

function Onkey () {
    let keyword = String.fromCharCode(event.keyCode);

    if ((Rightletter.indexOf(keyword) > -1) || (Wrongletter.indexOf(keyword) > -1)) {
        return ;
    }

    let idx = Chosenword.indexOf(keyword);
    //correct letter
    if (idx > -1 ) {
        //add right letter to array

        Rightletter.push(keyword)

        for(var x=0; x<Chosenword.length; x++) {
            if (Chosenword[x] == keyword) {
                Underscore[x] = keyword;
            }
        }
        // replacing letter with underscore
        //adding wrong letter to the wrong letter array
        Currentword_div.innerHTML = Underscore;
        win();
    }
    else {
        Wrongletter.push(keyword);
        lose();
    }
};

function win() {
    Letters_correct++;
    Winnum_span.innerHTML = Letters_correct;
    if (Underscore.join('') == Chosenword) {
        alert("winner.")
    }
}

function joinit() {
    Currentword_div.innerHTML = generateUnderscore()
}

function lose() {
    Guesses_left--;
    Attemptsnum_span.innerHTML = Guesses_left;
    Guessedletters_div.innerHTML = Wrongletter;
    if (Guesses_left === 0) {
        alert("LOSER.")
    }
}