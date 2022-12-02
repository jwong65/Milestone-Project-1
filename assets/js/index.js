var playerhealth = 20;
var enemyhealth = 20;
var turnNumber = 1;

//The cards will need to be objects that way they have infomration in them
// It can no longer be var because it will be shuffled.
var deck =[]

//Need a discardpile = [], that way I can pop cards out and have a length of the deck 
//Another const hand =[] will be needed so I can keep track of how many cards are in the hand
const discardpile = []
const hand=[]
//This variable will keep track of how many number of cards were played this turn. This is because I put an arbitrary limit of 3 cards played per turn
var numberofCardplayed =0;

//This variable will keep track of how much defense is being applied on the turn. This needs to be applied to damage cards and reduction cards will incresae this.
var turnDefense =0;
var opponentDefense =0;

//Allowing damage cards to be played variable. This might be a bit much, possibly postMVP type of implemtation
//var damageAllowed = true;

function displayHealth(healthnum, idname){
    let innerHealth = healthnum
    document.getElementById(idname).textContent=innerHealth
}
//A function is going to be needed to confirm whether the player wants to play a card. This may seem a bit bunch because I feel like it will interupt the flow of the game
//Using confirm() from W3Schools you can put a variable to be output if you want the confirm box to show, but I have the displayInformation function so that is not neccesary
//I also considered prompt(), but I would rather the user not have to put yes or no
//Consideration was also put for whether the user wanted to play a card or not but that stops the flow of the game and can become very irritating without the option to remove it
//endTurn function should also signal the beginning for the opponent's turn
//https://www.w3schools.com/js/js_popup.asp

function DrawEndTurn(){
    displayInformation("Turn has ended.", "info")
    //This is the one card you draw for using the draw button
    newCard(deck, hand, discardpile)
    displayCardsinHand()
        //turnNumber++ Turn number became unneccesary but was important for helping find out errors.
}
//This is a function that will always be called to keep track of how many cards are in your hand. In case you do not want to count yourself. It will also come in handy for cards that rely on the hand count
function displayCardsinHand(){
    document.getElementById('NumCardsHand').textContent = "Cards currently in hand: " + hand.length
}
displayCardsinHand()
displayHealth(playerhealth, "HP")
displayHealth(enemyhealth, "opphealth")
// Display Health should be invoked everytime there's a change in the system.

//This is the eventListener for the button that will show you how many cards are in your deck
document.getElementById('showdeck').addEventListener('click', ()=>{
    displayInformation("Your deck currently has " + deck.length + " card(s).", "info")
})
//This is the rules eventListener for the button, it will show you the rules in the information box once you click on this button
document.getElementById('rules').addEventListener('click',()=>{
    displayInformation("To begin you have 10 cards in your deck and are allowed to draw once per turn. You are automatically given 3 cards to begin the match. If you draw for the turn your turn ends. You are allowed to play up to 3 cards per turn before it ends (unless extended by effects). If you want to end your turn prematurely, use the end turn button. If you do not have any cards in your deck you cannot draw a card.", "info")
})
// This is currently the eventListener for the button for ending the turn
document.getElementById('endturn').addEventListener('click', ()=>{
    if (confirm("End your turn?")==true){
        numberofCardplayed = 3
        checkManyPlayed()
    }
    else{
        displayInformation("End turn has been canceled", 'info')
    }
})
//The eventListener for the draw cards button is similar to the endTurn button because drawing ends the turn
//Event listener should draw a card, that will be done later.
document.getElementById('draw').addEventListener('click', ()=>{
    //Currently commenting out endTurn so I can test quicker.
    
    //This needs to be a confirm so the player can say no.
    if(confirm("Draw one card and end your turn?")==true){
        DrawEndTurn()
        numberofCardplayed = 3
        checkManyPlayed()
    } else{
        displayInformation("Drawing to end the turn has been canceled", 'info')
    }
})

//A button will be needed to show the log of what the opponent has done.

document.getElementById('showoppturn').addEventListener('click',()=>{
    if (turnNumber==1){
        displayInformation("This is the first turn, the opponent has not made a turn", 'info')
    }
    else{
        displayInformation("This a log of what your opponent has done on the previous turn. The opponent struck for "+ (numofOpponentCards-1) +" damage. They then drew 2 cards", "info")
    }
})
