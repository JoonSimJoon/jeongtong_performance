var randomNumber = 0;
console.log('das');
var cnt =0;
function change(cnt) {
    console.log(cnt); 
    var locar = document.getElementsByName("box");
    var xl =document.getElementsByName("x");
    var yl =document.getElementsByName("y");

    randomNumber = Math.floor(Math.random() * 700) + 128;
    locar[0].style.top=randomNumber;
   // console.log(xl.)
    xl[0].innerHTML = randomNumber;
    randomNumber = Math.floor(Math.random() * 1600) + 50;
    locar[0].style.left=randomNumber;
    yl[0].innerHTML = randomNumber;

}