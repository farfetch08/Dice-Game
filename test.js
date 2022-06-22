var randIntDice1 = Math.floor((Math.random()*6))+1;
var randIntDice2 = Math.floor((Math.random()*6))+1;


document.querySelector(".img1").setAttribute("src", "images/dice"+randIntDice1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randIntDice2+".png");

var message = document.querySelector("h1");
if(randIntDice1>randIntDice2){
    message.innerText = "Player 1 wins!";
}
else if(randIntDice1<randIntDice2){
    message.innerText = "Player 2 wins!";
}
else{
    message.innerText = "Draw!";
}