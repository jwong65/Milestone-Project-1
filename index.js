var playerhealth = 100
var enemyhealth =100
console.log(playerhealth)
function displayHealth(healthnum, idname){
    let innerHealth = healthnum
    document.getElementById(idname).innerHTML= innerHealth;
}

displayHealth(playerhealth, "health")
displayHealth(enemyhealth, "opphealth")