// Generate random Number
function newGame(){
targetNumber =Math.floor(Math.random() * ((120-19)+1) + 19);
userCounter = 0;
$("#target").text("Target: " + targetNumber);
$("#user").text("Your Guess: " + userCounter)
crystalOne = Math.floor(Math.random() * ((11)+1) + 1);
crystalTwo = Math.floor(Math.random() * ((11)+1) + 1);
crystalThree = Math.floor(Math.random() * ((11)+1) + 1);
crystalFour = Math.floor(Math.random() * ((11)+1) + 1);
};
// Print to console
console.log(targetNumber)
// Add targer number to html
// $("header").replace("Number to Guess: " + targetNumber);

// Arrays
var targetNumber =Math.floor(Math.random() * ((120-19)+1) + 19);
$("#target").text("Target: " + targetNumber);
var userCounter = 0;
var wins =0;
var loses =0;
// Crystal values 
var crystalOne = Math.floor(Math.random() * ((11)+1) + 1);
var crystalTwo = Math.floor(Math.random() * ((11)+1) + 1);
var crystalThree = Math.floor(Math.random() * ((11)+1) + 1);
var crystalFour = Math.floor(Math.random() * ((11)+1) + 1);

$("#one").click(function(e){
    console.log(crystalOne);
    userCounter = userCounter + crystalOne;
    alert(userCounter);
    $("#user").text("Your Guess: " + userCounter);
    myfunction();
});
$("#two").click(function(e){
    console.log(crystalTwo);
    userCounter = userCounter + crystalTwo;
    alert(userCounter);
    $("#user").text("Your Guess: " + userCounter);
    myfunction();
});
$("#three").click(function(e){
    console.log(crystalThree);
    userCounter = userCounter + crystalThree;
    alert(userCounter);
    $("#user").text("Your Guess: " + userCounter);
    myfunction();
});
$("#four").click(function(e){
    console.log(crystalFour);
    userCounter = userCounter + crystalFour;
    alert(userCounter);
    $("#user").text("Your Guess: " + userCounter);
    myfunction();
});

// If target number is reached, run win function
function myfunction(){
if(userCounter === targetNumber){
    alert("Winner Winner Chicken Dinner!");
    wins++; 
    $("#win").text("Wins: " + wins);
    newGame();
}
    else if(userCounter > targetNumber){
    alert("L0SeR!");
    loses++;
    $("#fail").text("Fails: " + loses);
    newGame();
    }
        else{
            $("#user").text("Your Guess: " + userCounter);
}};
