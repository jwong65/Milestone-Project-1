//Using another file to help generate the combat that will be taking place.

//Player will win if health ever drops to zero.
function checkVictory(){
    if (enemyhealth<=0){
        window.alert("Congratulations, You Win: enemy health has dropped to zero.")
    }
    if (playerhealth<=0){
        window.alert("Unfortunate. Game Over: Your health has droped to zero.")
    }
}
function checkManyPlayed(){
    if (numberofCardplayed==3){
        //Opponent turn will start.
        alert("Opponent turn begins.");{
        setTimeout(()=>{
                //Opponent will do 5 damage with 1 card if they hold less than 6 cards and more than 2.
                turnNumber = turnNumber +1
                playerhealth = playerhealth -(numofOpponentCards)
                displayInformation("Opponent plays one card and strikes for "+ numofOpponentCards + " damage (how many cards they held) and draws 2", 'info')
                displayHealth(playerhealth, 'HP')   
                opponentDraws()
                numofOpponentCards+=1
                checkVictory()
                numberofCardplayed=0
        },1000)
    }
    }
}


// //A function will be needed to reset these after every turn.
// function resetTurn(numberofCardplayed){
//     //turnDefense, damageAllowed
//     numberofCardplayed = 0;
//     // damageAllowed =true;
// }
//Example call would be resetTurn(numberofCardplayed, turnDefense, damageAllowed) This should be called when endTurn is called, but because endTurn is in index and it is above the declaration of battle.js it may need to be moved.


//Opponent turn will have to be put on a setTimeout() that will be okay enough that it doesn't seem jarring.
//A button will be needed to show the log of what the opponent has done.

document.getElementById('showoppturn').addEventListener('click',()=>{
    if (turnNumber==1){
        displayInformation("This is the first turn, the opponent has not made a turn", 'info')
    }
    else{
        displayInformation("This a log of what your opponent has done on the previous turn. The opponent struck for "+ (numofOpponentCards-1) +" damage. They then drew 2 card", "info")
    }
})
