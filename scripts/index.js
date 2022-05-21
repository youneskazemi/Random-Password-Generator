let validChars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let password = ""
function generateRandomPassword(){
    let passwordLength = document.getElementById("password_length").value
    if (passwordLength == ""){
        alert("Set Password Length!")
        return
    }
    if (passwordLength < 5 || passwordLength > 20){
        alert("Password Length must be between 5 and 20")
        return
    }
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < passwordLength; j++){
            randomNumber = Math.floor(Math.random() * validChars.length)
            char = validChars[randomNumber]
            password += char 
            let id ="rectangle_" + (i + 1)
            console.log(id)
            document.getElementById(id).textContent = password

        }  
        password =""
        
    }

    

}