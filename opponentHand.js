
function oppHand(){
    let oppHand = document.createElement('div')
    oppHand.style.width ='50%'
    oppHand.style.height ='100px'
    oppHand.style.display='flex'
    oppHand.style.flexDirection='row'
    oppHand.style.justifyContent = 'space-evenly'
    oppHand.setAttribute('id', 'opphand')
    oppHand.style.border='1px solid black'
    oppHand.style.backgroundColor ='orange'
    document.body.append(oppHand)
    oppHand.style.position='relative'
    oppHand.style.left ="550px"
    oppHand.style.bottom = "500px"

    return oppHand
}


const drawOpp = oppHand()

//Opponent hand does not need to have public knowledge because I want it to be more simplier. If I have time I could hard-code the opponent drawing actual cards.
//Opponent should not have a discard pile of their own, it has been difficult to keep track of for the regular player and I do not want to add that onto the project for the timebeing.

function opponentDraws(){
    
}