const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.querySelector('.btn')
let clearBtn = document.getElementById('btn-clear')
let firstPass = document.getElementById('firstPassword')
let secondPass = document.getElementById('secondPassword')

let isClicked = false

btn.addEventListener("click", function () {
  if (isClicked === false) {
    generatePasswords()
    isClicked = true
}
 })

 clearBtn.addEventListener("click", function (){
    firstPass.textContent = ''
    secondPass.textContent = ''
    isClicked = false
 })
 
 function generatePasswords() {
     function randomIndex() { 
         return Math.floor(Math.random() * characters.length)
         }
     for (let i = 0; i < 15; i++){
         firstPass.textContent += characters[randomIndex()]
         secondPass.textContent += characters[randomIndex()]
     } 
 }



