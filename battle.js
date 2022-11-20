//Using another file to help generate the combat that will be taking place.

//Player will win if health ever drops to zero.
function checkVictory(){
    if (enemyhealth<=0){
        window.alert("Congratulations enemy health has dropped to zero.")
    }
}
function checkManyPlayed(){
    if (numberofCardplayed=3){
        //Opponent turn will start.
    }
    resetTurn(numberofCardplayed)
}


//A function will be needed to reset these after every turn.
function resetTurn(numberofCardplayed){
    //turnDefense, damageAllowed
    numberofCardplayed = 0;
    // damageAllowed =true;
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
    displayInformation("This a log of what your opponent has done on the previous turn" + turnNumber, "info")
})
