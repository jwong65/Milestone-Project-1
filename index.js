var playerhealth = 100
var enemyhealth =100
console.log(playerhealth)
function displayHealth(playerhealth, idname){
    let innerHealth = playerhealth
    document.getElementById(idname).innerHTML= innerHealth;
}

displayHealth(playerhealth, "health")
displayHealth(enemyhealth, "opphealth")