const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
  let password1 = "";
  let password2 = "";

  for (let i = 0; i < 15; i++) {
    const randomChar1 = characters[Math.floor(Math.random() * characters.length)];
    const randomChar2 = characters[Math.floor(Math.random() * characters.length)];
    password1 += randomChar1;
    password2 += randomChar2;
  }

  // Get the elements
  let passEl1 = document.getElementById("pass-el-1");
  let passEl2 = document.getElementById("pass-el-2");

  // Display passwords
  passEl1.textContent = password1;
  passEl2.textContent = password2;
}