// const card1 ={
//     type: "Heal",
//     value: "5",
//     text: "This card will heal you for 5 health"
// }
//A fucntion is needed to generate cards.
//This constructor will be used to create cards
function cardCreation(type, value, text){
    this.type = type
    this.value =value
    this.text = text
}

// This is now the way to create cards instead of using the const creating an object
//First set of cards 1-5. The beginning section.
const card1 = new cardCreation('heal', 5, 'This card will heal you for 5 health')
const card2 = new cardCreation('damage', 2, "This card does 2 damage to your opponent")
const card3 = new cardCreation('block', 1, "The next attack you take will be reduced by 1.")
const card4 = new cardCreation('recycle', null, "All cards in the discard pile are shuffled back into the deck. This card cannot be discarded.")
const card5 = new cardCreation('draw', 1 , "You can draw one additional card this turn. You cannot use damage cards if you play this card")
//Instead of creating new cardCreation of the damage 2 card, I will push additional copies of the card to generate the deck.
const card6 = new cardCreation('damage', null, "This card does damage equal to the number of cards you're holding.")