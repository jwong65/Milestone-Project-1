//I want to use another file to store the cards.
//Card 1 function to heal by value
function card1Function(card1, directedHealth, target){
    if (Number(card1.value)+directedHealth > 20){
        //Error found, when you write directedHealth it does not change the global variable.
        `${directedHealth}`=20;
        //console.log(directedHealth)
        displayHealth(`${directedHealth}`, target)
        //console.log("Card 1 activated")
    }
    else{
        `${directedHealth}`=`${directedHealth}`+card1.value
        displayHealth(`${directedHealth}`, target)
        //console.log("Card1 activated")
    }
}
// card1Function(card1, playerhealth, "HP")
// console.log(playerhealth)
//An example of the card1 being use - card1Function(card1, playerhealth, "HP")

//Card 2 function to do damage.
function card2Function(card2, directedHealth, target){
    directedHealth = directedHealth - card2.value
    displayHealth(directedHealth, target)
}
// card2Function(card2, enemyhealth, "opphealth")
// console.log(enemyhealth)

//Card 3 function to reduce damage
function card3Function(card3, target){
    //target can be turnDefense or oppDefense
    if (target =="player"){
        turnDefense+=card3.value
    }
    else{
        opponentDefense+=card3.value
    }
}

//Card 4 function to recyle the discard pile. To make it simple the opponent will never run out of cards so they will not play this card.
function card4Function(){
    discardpile.forEach(()=>{
        returnCard= discardpile.pop()
        deck.push(returnCard)
        shuffleDeck()
    })
}
