//I want to use another file to store the cards.
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