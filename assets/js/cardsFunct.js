//I want to use another file to store the cards.
//Card 1 function to heal by value
function card1Function(card1, target){
    if (Number(card1.value)+playerhealth > 20){
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
//This function could be used against the player if I have time post-MVP
//I am changing this function because I feel the game could drag on if any type of defense was applied, this will be multiplicative to cardsPlayed
function card3Function(target){
    //target can be turnDefense or oppDefense
    // if (target =="player"){
    //     turnDefense+=card3.value
    // }
    // else{
    //     opponentDefense+=card3.value
    // }
    
    // console.log(numberofCardplayed + " Number of Cards played")
    // console.log(numberofCardplayed*3 + "Times 3 = damage")
    enemyhealth = enemyhealth - (numberofCardplayed*3)
    displayHealth(enemyhealth, target)
}

//Card 4 function to add cards back to the deck. 
function card4Function(){
    discardpile.forEach(()=>{
        let returnCard= discardpile.pop()
        console.log(returnCard)
        deck.push(returnCard)
        shuffleDeck(deck)
        console.log(deck.length)
    })
}


//Card 5 function allows for a second draw
function card5Function(){
    newCard(deck, hand, discardpile)
    newCard(deck, hand, discardpile)
}

//Card 6 function to do damage equalivent to the number of cards in your hand, including itself.
function card6Function(target){
    //For now target is only opponent
    enemyhealth = enemyhealth - (hand.length+1)
    //Hand.length +1 because the pop happens before the card6function is called
    displayHealth(enemyhealth, target)
}