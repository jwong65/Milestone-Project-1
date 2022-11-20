//I want to use another file to store the cards.
//Card 1 function to heal by value
function card1Function(card1, target){
    if (Number(card1.value)+playerhealth > 20){
        //Error found, when you write directedHealth it does not change the global variable. 
        //Template literals are used to change the global variable, they are broken once again will ask in class about them ${}
        playerhealth=20;
        //console.log(directedHealth)
        displayHealth(playerhealth, target)
        console.log("Card 1 activated")
    }
    else{
        playerhealth=playerhealth+card1.value
        displayHealth(playerhealth, target)
        console.log("Card1 activated")
    }
}
// card1Function(card1, playerhealth, "HP")
// console.log(playerhealth)
//An example of the card1 being use - card1Function(card1, playerhealth, "HP")

//Card 2 function to do damage.
function card2Function(card2, target){
    enemyhealth = enemyhealth - card2.value
    displayHealth(enemyhealth, target)
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
