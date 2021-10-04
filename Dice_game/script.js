function randomDiceGenerator() {
    return "images/dice" + (Math.floor(Math.random()*6+1)) + ".png";
}
function init(){
    document.getElementById("name--0").textContent = sessionStorage.getItem("player1");
    document.getElementById("name--1").textContent = sessionStorage.getItem("player2");  

}
init();
document.querySelector("img.img1").setAttribute("src",randomDiceGenerator());
document.querySelector("img.img2").setAttribute("src",randomDiceGenerator());
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// if dice1 < dice2
if(document.querySelector("img.img1").getAttribute("src") < document.querySelector("img.img2").getAttribute("src")) {
    document.querySelector("h1").innerHTML="Player 2 Won";
}

// if dice1 > dice2
else if (document.querySelector("img.img1").getAttribute("src") > document.querySelector("img.img2").getAttribute("src")) {
    document.querySelector("h1").innerHTML=" Player 1 Won";
}

else {
    document.querySelector("h1").innerHTML="Draw!";
}