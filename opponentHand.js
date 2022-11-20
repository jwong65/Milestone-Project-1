
function oppHand(){
    let oppHand = document.createElement('div')
    oppHand.style.width ='50%'
    oppHand.style.height ='100px'
    oppHand.style.display='flex'
    oppHand.style.flexDirection='row'
    oppHand.style.justifyContent = 'space-evenly'
    oppHand.setAttribute = ('id', 'opphand')
    oppHand.style.border='1px solid black'
    oppHand.style.backgroundColor ='orange'
    document.body.append(oppHand)
    oppHand.style.position='relative'
    oppHand.style.left ="550px"
    oppHand.style.bottom = "500px"
}

const drawOpp = oppHand()

