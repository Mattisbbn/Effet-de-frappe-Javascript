const text = document.getElementById("text").innerHTML;
document.getElementById("text").innerText = ""; // Efface le texte
function typing() {
let i = 0;   
 

 setInterval(() => {
    if (i < text.length) {
      document.getElementById("text").innerHTML += text[i];
      i++;
    }}, 50); 
  }
