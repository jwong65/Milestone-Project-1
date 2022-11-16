let Playerhealth = document.getElementById('health').value
function displayHealth(Playerhealth){
    console.log(Playerhealth)
    document.getElementById('health').textContent = String(Playerhealth)
}

displayHealth()