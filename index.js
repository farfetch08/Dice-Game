var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

var dice1 = document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");
var dice2 = document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");

var winner = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    winner.innerText = "🚩Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    winner.innerText = "Player 2 wins!🚩";
}
else {
    winner.innerText = "Draw!";
}