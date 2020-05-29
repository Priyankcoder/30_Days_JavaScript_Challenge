var i = 0;
var txt = `Wanna learn Javascript ?`; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  }
}
typeWriter();
