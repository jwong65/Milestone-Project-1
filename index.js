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

document.getElementById('showdeck').addEventListener('click', ()=>{
    displayInformation("Your current deck is:", "info")
})

document.getElementById('rules').addEventListener('click',()=>{
    displayInformation("To begin you have 5 cards in your deck and are allowed to draw once per turn. If you draw for the turn your turn ends. You are allowed to play up to 3 cards per turn before it ends (unless extended by effects). If you want to end your turn prematurely, use the end turn button.", "info")
})
//