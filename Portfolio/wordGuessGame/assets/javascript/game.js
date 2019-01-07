var wins = 0;
var loses = 0;
var numGuess = 10;
var wrongGuess =[];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random()* alphabet.length)]; 
console.log(computerGuess)
document.onkeyup = function(event){
var userGuess = event.key;
console.log(wrongGuess);
document.getElementById("guessesLeft").innerHTML= "Number of Guesses Left: " + numGuess;

if(userGuess === computerGuess){
    wins++
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    alert("You Win!!");
    myfunction();
}else{
    wrongGuess.push(userGuess);
    document.getElementById("wrongGuesses").innerHTML = "Your Guesses: " + wrongGuess;
    alert("Wrong answer!")
    numGuess--;
}
if(numGuess === 0){
    alert("You Lose!")
    loses++;
    document.getElementById("loses").innerHTML = "Loses: " + loses;
    myfunction();

}
function myfunction(){
    alert("New Game Starting Now");
    wrongGuess = [];
    document.getElementById("wrongGuesses").innerHTML ="Your Guesses: " + wrongGuess;
    numGuess = 10;
    document.getElementById("guessesLeft").innerHTML="Number of Guesses Left: " + numGuess;
    computerGuess = alphabet[Math.floor(Math.random()* alphabet.length)];
    console.log(computerGuess)
}}
