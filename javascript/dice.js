var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// change left side
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 +".png");

// change right side
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// verify for the winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "It's a draw!"
}


