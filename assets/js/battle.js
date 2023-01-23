//Using another file to help generate the combat that will be taking place.

//Player will win if health ever drops to zero.
function checkVictory(){
    if (enemyhealth<=0){
        window.alert("Congratulations, You Win: enemy health has dropped to zero. \nPress the new game button to start a new game")
    }
    if (playerhealth<=0){
        window.alert("Unfortunate. Game Over: Your health has droped to zero. \nPress the new game button to start a new game")
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

//Opponent turn will have to be put on a setTimeout() that will be okay enough that it doesn't seem jarring.
