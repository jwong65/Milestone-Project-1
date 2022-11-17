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

