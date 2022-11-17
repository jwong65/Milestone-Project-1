//Using newInventory from the JS-Web-Game assignments as a basis.

function newHand(){
    let hand = document.createElement('hand')
    hand.style.width = '50%'
    hand.style.height = '100px';
    hand.style.display ='flex'
    hand.style.flexDirection = 'row'
    hand.style.alignItems = 'center'
    hand.style.justifyContent = 'center'
    //This border will be for testing
    hand.style.border = '1px solid black'
    hand.style.backgroundColor = 'yellow'
    document.body.append(hand)
}
newHand()