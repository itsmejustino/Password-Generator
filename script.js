// Assignment Code
var generateBtn = document.querySelector("#generate");

const includeUppercase
const

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
 

}

// Generate Criteria Code

// 1. prompt user for password criteria
//  a.password length between 8 and 128
//  b. Lowercase, uppercase, numbers and special characters

// 2. validate input is correct (true)
// 3. generate password based on given criteria

// 4. display password on screen.
 // this will return the generated password




// Write password to the #password input
function writePassword() {
  var password = generatePassword();// create function for password generate
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
