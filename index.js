var playerhealth = 14
var enemyhealth = 20
var turnNumber = 1
var turnEnd = false;
// console.log(playerhealth)

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

function DrawEndTurn(text){
    if (confirm(text)){
     displayInformation("Turn has ended.", "info")
        console.log("Turn "+ turnNumber+ " Ended")
        newCard(deck, hand)
        displayCardsinHand()
        turnNumber++
        turnEnd = true;
    } else{
        return
    }
}
//Currently this has no use case, but there should be a scenario where the turn will end because of a condition.
function endTurn(){
    displayInformation('The turn has ended.', 'info')
    turnEnd =true;
}

displayHealth(playerhealth, "HP")
displayHealth(enemyhealth, "opphealth")
// Display Health should be invoked everytime there's a change in the system.

//This will need to be put into a function eventually

    // document.getElementById("newgame").addEventListener("mouseover", ()=>{
    //     document.getElementById("newgame").style.backgroundColor ="#9932c9"
    // })
    // document.getElementById("newgame").addEventListener("mouseout",()=>{
    //     document.getElementById('newgame').style.backgroundColor="chartreuse"
    // })

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
    endTurn("Do you want to end your turn?")
})
//The eventListener for the draw cards button is similar to the endTurn button because drawing ends the turn
//Event listener should draw a card, that will be done later.
document.getElementById('draw').addEventListener('click', ()=>{
    //Currently commenting out endTurn so I can test quicker.
    DrawEndTurn("Draw one card and end your turn?")
    
})
