//I want to use another file to store the cards.
function card1Function(card1, directedHealth){
    console.log(Number(card1.value) +(directedHealth))
    if (Number(card1.value)+directedHealth>= 20){
        directedHealth=20;
    }
    else{
        directedHealth=+card1.value
    }
}

card1Function(card1, playerhealth)