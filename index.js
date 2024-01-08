const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let showPassOne = document.getElementById("show-passone")
let showPassTwo = document.getElementById("show-passtwo")
let passcopy1  = document.getElementById("passcopy-one")
let passcopy2 = document.getElementById("passcopy-two")
let passEl = document.getElementById("password-length")

let p1 = ''
let p2 = ''

showPassOne.addEventListener("click", function() {
        navigator.clipboard.writeText(p1)
        passcopy1.textContent = "Copied 1 Password"
})

showPassTwo.addEventListener("click", function() {
        navigator.clipboard.writeText(p2)
        passcopy2.textContent = "Copied 2 Password"
})

function passwordGenerate() {
        if(passEl.value === '') {
                passEl.value = 15
        }
        p1 = ''
        p2 = ''
        for(let i = 0; i < passEl.value; i++)  {                
                index1 = Math.floor(Math.random() * characters.length)
                index2 = Math.floor(Math.random() * characters.length)
                p1 += characters[index1]
                p2 += characters[index2]
        }
        showPassOne.textContent = p1 
        showPassTwo.textContent = p2
}


function reset() {
        if(showPassOne.textContent === p1 && showPassTwo.textContent === p2) {
            showPassOne.textContent = "password-1"
            showPassTwo.textContent = "password-2"
        }              
}
