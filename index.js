const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = ""
let password2 = ""
let password1El = document.getElementById("pass1")
let password2El = document.getElementById("pass2")

function generatePassword() {
    password1El.style.display = "none"
    password2El.style.display = "none"
    let number = document.getElementById("NumberOfCharacters").value
    for (i=0; i<number ; i++) {
        password1 += characters[Math.floor(Math.random()*characters.length)]
        password2 += characters[Math.floor(Math.random()*characters.length)]
    }

    password1El.textContent = password1
    password2El.textContent = password2
 
    if (password1  &&  password2 ) {

        password1El.style.display = "block"
        password2El.style.display = "block"
    }
    password1 = ""
    password2 = ""
}


const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    const data = generatePassword()
    //console.log(`${data.password1} ${data.password2}`)
}
)

