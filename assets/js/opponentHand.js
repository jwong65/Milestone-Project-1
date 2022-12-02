
function oppHand(){
    let oppHand = document.createElement('div')
    oppHand.style.width ='850px'
    oppHand.style.height ='100px'
    oppHand.style.display='flex'
    oppHand.style.flexDirection='row'
    oppHand.style.justifyContent = 'space-evenly'
    oppHand.setAttribute('id', 'opphand')
    oppHand.style.border='1px solid black'
    oppHand.style.backgroundColor ='#f5ecdc'
    document.body.append(oppHand)
    oppHand.style.position='relative'
    oppHand.style.left ="350px"
    oppHand.style.bottom = "650px"

    return oppHand
}


const drawOpp = oppHand()

//Opponent hand does not need to have public knowledge because I want it to be more simplier. If I have time I could hard-code the opponent drawing actual cards.
//Opponent should not have a discard pile of their own, it has been difficult to keep track of for the regular player and I do not want to add that onto the project for the timebeing.

//To add some realism, maybe I'll use setTimeout for drawing the cards?
function opponentDraws(){
    let newImage = document.createElement('img')
    newImage.src ='assets/redCardborder.jpg'

    newImage.style.height ='100px'
    document.getElementById('opphand').appendChild(newImage);

}
//This is to have 3 cards for the opponent but can be put into a loop
opponentDraws()
opponentDraws()
opponentDraws()

var numofOpponentCards = 3;