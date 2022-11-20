//Using another file to help generate the combat that will be taking place.

//This variable will keep track of how many number of cards were played this turn. This is because I put an arbitrary limit of 3 cards played per turn
var numberofCardplayed =0;

//This variable will keep track of how much defense is being applied on the turn. This needs to be applied to damage cards and reduction cards will incresae this.
var turnDefense =0;

//Allowing damage cards to be played variable. This might be a bit much, possibly postMVP type of implemtation
var damageAllowed = true;

//A function will be needed to reset these after every turn.
function resetTurn(numberofCardplayed, turnDefense, damageAllowed){
    numberofCardplayed = 0;
    turnDefense =0;
    damageAllowed =true;
}
//Example call would be resetTurn(numberofCardplayed, turnDefense, damageAllowed) This should be called when endTurn is called, but because endTurn is in index and it is above the declaration of battle.js it may need to be moved.

//I added a variable turnEnd in index.js, it will be false normally. When it is true that is when resetTurn will be called. Going to use a while loop.

while(turnEnd == true){

    resetTurn(numberofCardplayed, turnDefense, damageAllowed)

    //This will include a function for the opponent's turn

    turnEnd =false;

}
//Opponent turn will have to be put on a setTimeout() that will be okay enough that it doesn't seem jarring.
//A button will be needed to show the log of what the opponent has done.

document.getElementById('showoppturn').addEventListener('click',()=>{
    displayInformation("text of opponent's turn placeholder", "info")
})