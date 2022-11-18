var playerhealth = 20
var enemyhealth = 20

// console.log(playerhealth)

function displayHealth(healthnum, idname){
    let innerHealth = healthnum
    document.getElementById(idname).innerHTML= innerHealth;
}

displayHealth(playerhealth, "health")
displayHealth(enemyhealth, "opphealth")
// Display Health should be invoked everytime there's a change in the system.

//This will need to be put into a function eventually

    document.getElementById("newgame").addEventListener("mouseover", ()=>{
        document.getElementById("newgame").style.backgroundColor ="#9932c9"
    })
    document.getElementById("newgame").addEventListener("mouseout",()=>{
        document.getElementById('newgame').style.backgroundColor="chartreuse"
    })

//This is the eventListener for the button that will show you how many cards are in your deck
document.getElementById('showdeck').addEventListener('click', ()=>{
    displayInformation("Your deck currently has " + deck.length + " card(s).", "info")
})
//This is the rules eventListener for the button, it will show you the rules in the information box once you click on this button
document.getElementById('rules').addEventListener('click',()=>{
    displayInformation("To begin you have 5 cards in your deck and are allowed to draw once per turn. If you draw for the turn your turn ends. You are allowed to play up to 3 cards per turn before it ends (unless extended by effects). If you want to end your turn prematurely, use the end turn button. If you do not have any cards in your deck you cannot draw a card.", "info")
})
//