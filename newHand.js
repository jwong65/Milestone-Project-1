//Need a const deck = []
//The cards will need to be objects that way they have infomration in them
const deck =[]

//console.log(deck)

//Need a const discardpile = [], that way I can pop cards out and have a length of the deck 

const discardpile=[]

//A fucntion is needed to generate cards.
//I'm thinking of using an array to keep track of what cards the player has.

//This constructor will be used to create cards
function cardCreation(type, value, text){
    this.type = type
    this.value =value
    this.text = text
}
const card1 = new cardCreation('heal', '5', 'This card will heal you for 5 health')
// This is now the way to create cards instead of using the const creating an object
// const card1 ={
//     type: "Heal",
//     value: "5",
//     text: "This card will heal you for 5 health"
// }
deck.push(card1)

// const card2 = new cardCreation()

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
function newCard(deck){
    //getRndInteger(0,0)
    let draw = deck[0]
    let newImage = document.createElement('img')
    newImage.src ='assets/cardBorder.jpg'
    //newImage.src = URL, this will just be a placeholder for now until I can find an image for the cards so it won't be confusing

    newImage.style.height ='100px'
    document.getElementById('hand').appendChild(newImage)
    //We do not want the information to be displayed just yet
    console.log(draw.text)
    newImage.addEventListener('mouseover',()=>{
        displayInformation( draw.text, "info")
    })
    newImage.addEventListener('mouseout', ()=>{
        displayInformation("Your deck currently has " + deck.length + " card(s)." , "info")
    })

}
// For testing purpose adding additional cards to see where they will be appended
newCard(deck)
newCard(deck)
newCard(deck)

// document.getElementById('newgame').addEventListener('click', newCard(deck, "./SM35_EN_45.png"))


//A function is going to be needed to confirm whether the player wants to play a card. This may seem a bit bunch because I feel like it will interupt the flow of the game
