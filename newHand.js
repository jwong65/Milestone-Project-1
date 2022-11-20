

//On window load ask for player name so that can be input into the table
//Using the Prompt from W3Schools to help ask for the player's name

//Commenting this function out so I don't have to see it when I load the page everytime
function askName(){
    let playerName;
    let selection = prompt("Please enter your character name:")
    //this is used if the player does not answer the question or cancels the prompt
    if (selection== null || selection == "")
    {
        playerName="Player 1"
    }
    else{
        playerName =selection
    }
    document.getElementById('PlayerName').innerHTML = playerName
}
window.addEventListener('load', askName())



//This will be the file that is being used to give information to the player from the beginning.
//Need a function call for information everything something changes.

function displayInformation(input, location){
    let textbox = input
    document.getElementById(location).innerHTML = textbox;
}

displayInformation("This is your opening hand.", "info")

//This generation is to create the first deck.
deck.push(card1, card2, card3, card4, card5)
//This should be a for loop or something to that effect.
deck.push(card2, card2, card5, card6, card6)

// Shuffling the decks is important https://sebhastian.com/shuffle-array-javascript/ and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// I found this link where the array was shuffled by giving it a different value that is randomed, then sorted using sort()
// Instead of using the random number generation I need to put the objects in the array of a random order. by using Math.random it gets a random value from 0-.999
// By adding the -.5 it changes the range to -.5 to .499


function shuffleDeck(deck){
    return deck.sort(()=> Math.random()-.5)
}

deck = shuffleDeck(deck)
//This first call of shuffleDeck is to ensure that the beginning hand of every game will be different.


//Using newInventory from the JS-Web-Gameimage.pngimage.png assignments as a basis for newHand which is how drawing cards will be put in a function.
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
    hand.style.zIndex= 0

    hand.style.position ='relative'
    hand.style.bottom = "250px"
    
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
function newCard(deck, hand, discarded){
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
    let drawnCard = deck.pop()
    hand.push(drawnCard)

    //We do not want the information to be displayed just yet
    //Draw was undefined, because top_of_deck needs to be deck.length-1.
    newImage.addEventListener('mouseover',()=>{
        displayInformation(draw.text, "info")
    })
    newImage.addEventListener('mouseout', ()=>{
        displayInformation("Hover your mouse over each card to " , "info")
    })
    newImage.addEventListener("click", ()=>{
        //We need this to keep the player from playing only 3 cards a turn.
        numberofCardplayed++
        //This removes the card from the hand when used.
        newImage.remove()
        //console.log(discardpile)
        discarded.push(drawnCard)
        //To remove the card from the hand I cannot use .pop because that removes the last position of the array. 
        //As a quick fix, I can just pop because I'm only checking for hand.length at the moment
        hand.pop()
       
        // console.log(draw.cardID)
        if (draw.cardID =='1'){
            card1Function(card1, "HP")
            console.log("Card 1 was used")
        }
        else if (draw.cardID =='2'){
            card2Function(card2, 'opphealth')
            console.log("Card 2 was used")
        }
        else if (draw.cardID == '3'){
            card3Function(card3, 'player')
            console.log("Card 3 was used")
        }
        else if (draw.cardID =='4'){
            card4Function()
            console.log("Card 4 was used")
        }
        else if (draw.cardID =='5'){
            card5Function()
            console.log("Card 5 was used")
        }
        else if (draw.cardID =='6'){
            card6Function('opphealth')
            console.log("Card 6 was used")
        }
        //If template literals are not possible, I might just have to use if else statments to get the right effect with the right card.
        displayCardsinHand()
    
    })
    //Testing for hand array having the card that is popped from the deck
    // console.log("The deck is", deck)
    // console.log("The card ripped from the deck is", drawnCard)
    // console.log(hand)
    displayCardsinHand()
    // console.log("The hand is now ",handarr)
    
}
// For testing purpose adding additional cards to see where they will be appended
newCard(deck, hand, discardpile)
newCard(deck, hand, discardpile)
newCard(deck, hand, discardpile)