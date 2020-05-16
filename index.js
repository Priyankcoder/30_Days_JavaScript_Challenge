
let randomno = Math.floor(Math.random()*6)+1;
let randomimage = "images/"+"dice"+randomno+".png"
let imageloc = document.querySelectorAll("img");
imageloc[0].setAttribute("src", randomimage);
let randomno1 = Math.floor(Math.random()*6)+1;
let randomimage1 = "images/"+"dice"+randomno1+".png";
imageloc[1].setAttribute("src", randomimage1);
if (randomno == randomno1){
    document.querySelector("h2").innerHTML = "It's a Draw 🎌";
    
}
else{
    document.querySelector("h2").innerHTML = randomno > randomno1 ? "Player 1 win 🚩":"Player 2 win 🚩";
}


