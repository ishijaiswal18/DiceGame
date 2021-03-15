function rollTheDice() {
  var randomnumber1 = Math.floor(Math.random() * 6) + 1;
  console.log(randomnumber1);
  document.querySelector(".img1").setAttribute("src", "images\\dice" + randomnumber1 + ".png");
  var randomnumber2 = Math.floor(Math.random() * 6) + 1;
  console.log(randomnumber2);
  document.querySelector(".img2").setAttribute("src", "images\\dice" + randomnumber2 + ".png");
  if (randomnumber1 == randomnumber2) {
    document.querySelector(".head").innerHTML="Draw!";
  }else if (randomnumber1 > randomnumber2) {
    document.querySelector(".head").innerHTML="Player 1 win! 🚩";
  }else if (randomnumber1 < randomnumber2) {
    document.querySelector(".head").innerHTML="Player 2 wins! 🚩";
  }
}
