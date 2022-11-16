var playerhealth = 100
function displayHealth(playerhealth){
    console.log(playerhealth)
    let playerhealth = document.getElementById('health').textContent = String(playerhealth)
    document.getElementById('health').innerHTML= playerhealth;
}

displayHealth()