var randomNumber = 0;
var box = document.getElementById("box");

function change() {

    randomNumber = Math.floor(Math.random() * 1000) + 1;

    loc.style.top = randomNumber; 
    document.getElementById("x").innerHTML = randomNumber;

    randomNumber = Math.floor(Math.random() * 1000) + 1;

    loc.style.left = randomNumber;
    document.getElementById("y").innerHTML = randomNumber;
}