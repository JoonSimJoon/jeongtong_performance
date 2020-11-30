var randomNumber = 0;
var box = document.getElementById("box");

function change() {

    randomNumber = Math.floor(Math.random() * 700) + 128;

    loc.style.top = randomNumber;
    document.getElementById("x").innerHTML = randomNumber;

    randomNumber = Math.floor(Math.random() * 1600) + 50;

    loc.style.left = randomNumber;
    document.getElementById("y").innerHTML = randomNumber;

}