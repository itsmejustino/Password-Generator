// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(lower, upper, number, symbol, length) {

  let generatedpassword= '';

  const typesCount = lower+upper+number+symbol;

  const typesArray = [lower, upper, number, symbol];

}

// Generate Criteria Code

// 1. prompt user for password criteria
//  a.password length between 8 and 128
//  b. Lowercase, uppercase, numbers and special characters

// 2. validate input is correct (true)
// 3. generate password based on given criteria

// 4. display password on screen.
 // this will return the generated password

 const randomFunc = {lower:getLowerCase, 
  upper:getUppercase, 
  number:getNumber, 
  symbol:getSymbol}; 


function getLowerCase(){

  return String.fromCharCode(Math.floor(Math.random()*26)+ 97);
}

function getUpperCase(){

  return String.fromCharCode(Math.floor(Math.random()*26)+ 65);
}

function getNumber(){

  return String.fromCharCode(Math.floor(Math.random()*10)+ 48);
}

function getSymbol(){

  const specialsymbols = '!@#$%^&*(){}[]=<>/,.';
  return specialsymbols[Math.floor(Math.random()* specialsymbols.length)];
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();// create function for password generate
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
