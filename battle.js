//Using another file to help generate the combat that will be taking place.

//Player will win if health ever drops to zero.
function checkVictory(){
    if (enemyhealth<=0){
        window.alert("Congratulations enemy health has dropped to zero.")
    }
    if (playerhealth<=0){
        window.alert("Unfortunate. Your health has droped to zero.")
    }
}
function checkManyPlayed(){
    if (numberofCardplayed==3){
        //Opponent turn will start.
        alert("Opponent turn begins.");{
        setTimeout(()=>{
            if ((numofOpponentCards<6)&&(numofOpponentCards>2)){
                //Opponent will do 5 damage with 1 card if they hold less than 6 cards and more than 2.
                playerhealth = playerhealth -5
                displayInformation("Opponent strikes for 5 damage")
                displayHealth(playerhealth, 'HP')   
            }

        },1000)
    }
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


//Opponent turn will have to be put on a setTimeout() that will be okay enough that it doesn't seem jarring.
//A button will be needed to show the log of what the opponent has done.

document.getElementById('showoppturn').addEventListener('click',()=>{
    displayInformation("This a log of what your opponent has done on the previous turn" + turnNumber, "info")
})
