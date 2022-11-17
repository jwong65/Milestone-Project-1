var playerhealth = 100
var enemyhealth =100

// console.log(playerhealth)

function displayHealth(healthnum, idname){
    let innerHealth = healthnum
    document.getElementById(idname).innerHTML= innerHealth;
}

displayHealth(playerhealth, "health")
displayHealth(enemyhealth, "opphealth")
// Display Health should be invoked everytime there's a change in the system.

//This will need to be put into a function eventually

    document.getElementById("newgame").addEventListener("mouseover",()=>{
        document.getElementById("newgame").style.backgroundColor ="#9932c9"
    })
    document.getElementById("newgame").addEventListener("mouseout",()=>{
        document.getElementById('newgame').style.backgroundColor="chartreuse"
    })

//A fucntion is needed to generate cards.
//I'm thinking of using an array to keep track of what cards the player has.

//From W3Schools I used the formula to help get a random number. This function will get a random integer between the min and the max
//Math.floor is used to get rid of the decimal points that Math.random() will provide.
function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min) ) + min;
}

//Need a const deck = []
//The cards will need to be objects that way they have infomration in them
const deck =[]
const card1 ={
    type: "Heal",
    value: "5",
    text: "This card will heal you for 5 health"
}



getRndInteger(0, 10)

console.log()