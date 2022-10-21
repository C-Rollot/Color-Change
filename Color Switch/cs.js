//Colors array
const colors = ["green", "red", "yellow", "blue", "orange", "purple", "white", "black", "pink", 
"brown", "rgba(133,122,200)"];

let btn = document.getElementById("switch");
let color = document.querySelector('#color');

btn.addEventListener("click", function() {
    // Get random number between 0 and 10
    const randomNumber = Math.floor(Math.random() * 11);

    //Change background color
    document.body.style.backgroundColor = colors[randomNumber];

    //Change color text
    color.textContent = colors[randomNumber];

    //Confirm in the console
    console.log(`Color switched to ${color.textContent}`);
})