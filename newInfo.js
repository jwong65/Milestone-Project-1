//This will be the file that is being used to give information to the player from the beginning.
//Need a function call for information everything something changes.

function displayInformation(input){
    let textbox = input
    document.getElementById('info').innerHTML = textbox;
}

displayInformation("This is the opening hand.")