// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
console.log('you clicked the button');

//prompt user for password criteria
//  1.password length between 8 and 128
//  2. Lowercase, uppercase, numbers and special characters
//  3. validate input is correct (true)
//  4. generate password based on given criteria



//  5. display password on screen.


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
