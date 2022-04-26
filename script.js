// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
console.log('you clicked the button');

return "Generator Password goes here dude"; // this will return the generated password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();// create function for password generate
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
