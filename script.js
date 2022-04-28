// Assignment Code

//To-do's
//  Generate Password with user selected criteria

// 1. prompt user for password criteria using checkboxes
//  a.password length needs to be between 8 and 128
//  b. Lowercase, uppercase, numbers and special characters

// 2. validate input is wanted or not wanted (true or false)
// 3. generate password based on given criteria

// 4. display password on screen.
// this will return the generated password

//idea and resources from Web Dev Simplify on Youtube and Google searches


var generateBtn = document.querySelector("#generate");
const passwordLength = document.getElementById('passwordLength')
const addLowercase = document.getElementById('addLowercase');
const addUppercase= document.getElementById('addUppercase');
const addNumbers = document.getElementById('addNumbers');
const addSymbols = document.getElementById('addSymbols');
const value = passwordLength.value;

// listener for password criteria.
form.addEventListener('submit', d =>{  

//default values for unselcted values. 
d.preventDefault();

const passwordLength = passwordLengthNumber.value;
const addLowercase = addLowercaseElement.checked;
const addUppercase = addUppercaseElement.checked;
const addNumbers = addNumbersElement.checked;
const addSymbols = addSymbolsElement.checked;
const thisPassword = generatePassword(passwordLength, addLowercase, addUppercase, addNumbers, addSymbols);

})


//generate password from Charcode using iteration array with selected criteria
function generatePassword(addSymbols, passwordLength,addLowercase,addUppercase,addNumbers) {

  String.fromCharCode(65);

}

function arrayCharSet(smaller, larger){
for(var i = smaller, i <= larger , i++;){

  array.push(i);
}

return array;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();// create function for password generate
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
