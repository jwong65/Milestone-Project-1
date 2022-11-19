//On window load ask for player name so that can be input into the table
//Using the Prompt from W3Schools to help ask for the player's name

//Commenting this function out so I don't have to see it when I load the page everytime
// function askName(){
//     let playerName;
//     let selection = prompt("Please enter your character name:")
//     //this is used if the player does not answer the question or cancels the prompt
//     if (selection== null || selection == "")
//     {
//         playerName="Player 1"
//     }
//     else{
//         playerName =selection
//     }
//     document.getElementById('PlayerName').innerHTML = playerName
// }
// window.addEventListener('load', askName())


//Need a const deck = []
//The cards will need to be objects that way they have infomration in them
const deck =[]

//console.log(deck)

//Need a const discardpile = [], that way I can pop cards out and have a length of the deck 
//Another const hand =[] will be needed so I can keep track of how many cards are in the hand
const discardpile=[]
const hand=[]
//I'm thinking of using an array to keep track of what cards the player has.

//This generation is to create the first deck.
deck.push(card1, card2, card3, card4, card5)

//From W3Schools I used the formula to help get a random number. This function will get a random integer between the min and the max
//Math.floor is used to get rid of the decimal points that Math.random() will provide.
//https://www.w3schools.com/js/js_random.asp
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

displayInformation("This is your opening hand.", "info")
 
//Using newInventory from the JS-Web-Gameimage.pngimage.png assignments as a basis.

function newHand(){
    let hand = document.createElement('div')
    hand.style.width = '50%'
    hand.style.height = '100px';
    hand.style.display ='flex'
    hand.style.flexDirection = 'row'
    hand.style.alignItems = 'center'
    //justifyContent placed all the cards in the center but I think space-evenly or space-betwen can be used
    hand.style.justifyContent = 'space-evenly'
    //hand.style.justifyContent ='center'
    
    hand.setAttribute('id', 'hand')
    //This border will be for testing
    hand.style.border = '1px solid black'
    hand.style.backgroundColor = 'beige'
    
    document.body.append(hand)
    return hand
}

const drawHand = newHand()
//append only works if there's an Node object/String object being passed?

//This is a placeholder to see if I can add a newCard from deck to hand.
function newCard(deck, handarr){
    //A case must be made if there aren't any cards left in the deck to draw from
    if (deck.length ==0){
        displayInformation("There are no more cards to draw or search in your deck.", "info")
        return
    }
    let top_of_deck = Number(deck.length-1)
    let draw = deck[top_of_deck]
    let newImage = document.createElement('img')
    newImage.src ='assets/cardBorder.jpg'
    //newImage.src = URL, this will just be a placeholder for now until I can find an image for the cards so it won't be confusing

    newImage.style.height ='100px'
    document.getElementById('hand').appendChild(newImage);
    //We do not want the information to be displayed just yet
    //Draw was undefined, because top_of_deck needs to be deck.length-1.
    //console.log(draw.text)
    newImage.addEventListener('mouseover',()=>{
        displayInformation(draw.text, "info")
    })
    newImage.addEventListener('mouseout', ()=>{
        displayInformation("Your deck currently has " + deck.length + " card(s)." , "info")
    })
    let drawnCard = deck.pop()
    //Testing for hand array having the card that is popped from the deck
    // console.log("The deck is", deck)
    // console.log("The card ripped from the deck is", drawnCard)
    handarr.push(drawnCard)
    // console.log("The hand is now ",handarr)
    
}
// For testing purpose adding additional cards to see where they will be appended
newCard(deck, hand)
newCard(deck, hand)
newCard(deck, hand)


// Shuffling the decks is important https://sebhastian.com/shuffle-array-javascript/
// I found this link where the array was shuffled by giving it a different value that is randomed, then sorted using sort()
// To implement it first howver I need to add more cards than 1.