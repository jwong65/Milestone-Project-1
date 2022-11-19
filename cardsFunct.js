//I want to use another file to store the cards.
//Card 1 function to heal by value
function card1Function(card1, directedHealth, target){
    //console.log(Number(card1.value) +(directedHealth))
    if (Number(card1.value)+directedHealth>= 20){
        directedHealth=20;
        //console.log(directedHealth)
        displayHealth(directedHealth, target)
    }
    else{
        directedHealth=directedHealth+card1.value
        displayHealth(directedHealth, target)
        //console.log(directedHealth)
    }
}
card1Function(card1, playerhealth, "HP")
console.log(playerhealth)
//An example of the card1 being use - card1Function(card1, playerhealth, "HP")

//Card 2 function to do damage.
function card2Function(card2, directedHealth, target){
    directedHealth = directedHealth - card2.value
    displayHealth(directedHealth, target)
}
card2Function(card2, enemyhealth, "opphealth")
console.log(enemyhealth)