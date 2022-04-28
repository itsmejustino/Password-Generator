// Assignment Code
var generateBtn = document.querySelector("#generate");
const passwordLength = document.getElementById('passwordLength')
const addLowercase = document.getElementById('addLowercase');
const addUppercase= document.getElementById('addUppercase');
const addNumbers = document.getElementById('addNumbers');
const addSymbols = document.getElementById('addSymbols');


form.addEventListener('submit', e =>{  e.preventDefault();

const passwordLength = passwordLengthNumber.value;
const addLowercase = addLowercaseElement.checked;
const addUppercase = addUppercaseElement.checked;
const addNumbers = addNumbersElement.checked;
const addSymbols = addSymbolsElement.checked;
const thisPassword = generatePassword(passwordLength, addLowercase, addUppercase, addNumbers, addSymbols)

})

function generatePassword(passwordLength,addLowercase,addUppercase,addNumbers,addSymbols) {

  String.fromCharCode

}





// Generate Criteria Code

// 1. prompt user for password criteria
//  a.password length between 8 and 128
//  b. Lowercase, uppercase, numbers and special characters

// 2. validate input is wanted or not wanted (true or false)
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
