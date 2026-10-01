const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomPassElOne = document.getElementById ("randompass-elone")
let randomPassElTwo = document.getElementById ("randompass-eltwo")

function generateEl () {
    
randomPassElOne.textContent = ""
randomPassElTwo.textContent = ""

  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomPassElOne.textContent += characters [randomIndex]
  }
    for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomPassElTwo.textContent += characters [randomIndex]
  }
}

