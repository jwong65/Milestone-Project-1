//Need a const deck = []
//The cards will need to be objects that way they have infomration in them
const deck =[]
const card1 ={
    type: "Heal",
    value: "5",
    text: "This card will heal you for 5 health"
}
deck.push(card1)
console.log(deck)
//A fucntion is needed to generate cards.
//I'm thinking of using an array to keep track of what cards the player has.

//From W3Schools I used the formula to help get a random number. This function will get a random integer between the min and the max
//Math.floor is used to get rid of the decimal points that Math.random() will provide.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
 }
 
 getRndInteger(0, 10)
//This will be the file that is being used to give information to the player from the beginning.
//Need a function call for information everything something changes.

function displayInformation(input, location){
    let textbox = input
    document.getElementById(location).innerHTML = textbox;
}

displayInformation("This is the opening hand.", "info")
 
//Using newInventory from the JS-Web-Game assignments as a basis.

function newHand(){
    let hand = document.createElement('div')
    hand.style.width = '50%'
    hand.style.height = '100px';
    hand.style.display ='flex'
    hand.style.flexDirection = 'row'
    hand.style.alignItems = 'center'
    hand.style.justifyContent = 'center'
    hand.setAttribute('id', 'hand')
    //This border will be for testing
    hand.style.border = '1px solid black'
    hand.style.backgroundColor = 'yellow'
    
    document.body.append(hand)
    return hand
}

const drawHand = newHand()
//append only works if there's an Node object/String object being passed?

function newCard(deck){
    //getRndInteger(0,0)
    let draw = deck[0]
    let newImage = document.createElement('img')
    newImage.src = "assets/SM35_EN_45.png"
    document.getElementById('hand').appendChild(newImage)
    displayInformation(draw.text, "info")

}
newCard(deck)
// document.getElementById('newgame').addEventListener('click', newCard(deck, "./SM35_EN_45.png"))

