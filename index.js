const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generateRandomPassword() {
    let password = "";
    let passwordLength = 14;


    for (let i = 0; i < passwordLength; i++) {
        let RandomIndex = Math.floor(Math.random() * characters.length);
        password += characters[RandomIndex];
    }
     return password;
}

function mainButton() {
    const password1 = generateRandomPassword();
    const password2 = generateRandomPassword();

    document.querySelectorAll("#subButtons button")[0].textContent = password1;
    document.querySelectorAll("#subButtons button")[1].textContent = password2;
}