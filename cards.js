
// const card1 ={
//     type: "Heal",
//     value: "5",
//     text: "This card will heal you for 5 health"
// }
//A fucntion is needed to generate cards.
//This constructor will be used to create cards
function cardCreation(type, value, text, cardID){
    this.type = type
    this.value =value
    this.text = text
    this.cardID = cardID
}

// This is now the way to create cards instead of using the const creating an object
//First set of cards 1-5. The beginning section.
const card1 = new cardCreation('heal', 5, 'This card will heal you for 5 health', '1')
const card2 = new cardCreation('damage', 2, "This card does 2 damage to your opponent", '2')
const card3 = new cardCreation('damage', 3, "This card will do damage equal to the number of cards played this turn, (including this one) times 3", '3')
//I'm not certain why it doesn't get every copy back. In the discardpile array, there appears to be an array so I'm going to change this to add 2 damage cards and another copy of itself.
//IT could be because I could not get a way to pop the correct card out of the hand, but it shouldn't matter because I push the drawnCard into the discardpile when used.
const card4 = new cardCreation('recycle', null, "A random number of cards in the discard pile will be added back to the deck.", '4')

const card5 = new cardCreation('draw', 1 , "You can draw two cards.", '5')
//Instead of creating new cardCreation of the damage 2 card, I will push additional copies of the card to generate the deck.
const card6 = new cardCreation('damage', null, "This card does damage equal to the number of cards you're holding.", '6')