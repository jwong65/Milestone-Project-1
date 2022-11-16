var playerhealth = 100
console.log(playerhealth)
function displayHealth(playerhealth){
    let innerHealth = playerhealth;
    document.getElementById('health').innerHTML= innerHealth;
}

displayHealth(playerhealth)