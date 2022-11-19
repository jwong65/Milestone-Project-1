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
const card1 = new cardCreation('heal', '5', 'This card will heal you for 5 health')
// This is now the way to create cards instead of using the const creating an object
const card2 = new cardCreation()