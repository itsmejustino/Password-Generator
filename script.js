// Assignment Code
var generateBtn = document.querySelector("#generate");

//Assign criteria to each variable
var upperCase;
var lowerCase;
var includeNumbers;
var specialChar;

// user input to select criteria for password length, case, special character, and numbers
var choiceLength = window.prompt("How many characters would you like between 8-128 characters? (Okay for Yes and Cancel to Start Over)");
var upperCase = window.confirm("Would you like to generate a password with Upper case letters? (Okay for Yes and Cancel for No)");
var lowerCase = window.confirm("Would you like to generate a password with Lower case letters? (Okay for Yes and Cancel for No)");
var specChar = window.confirm("Would you like to generate a password with special characters? (Okay for Yes and Cancel for No)");
var withNumbers = window.confirm("Would you like to generate a password with numbers? (Okay for Yes and Cancel for No)");
var passwordLength = parseInt(choiceLength);
//ASCII chart for letters, numbers, and special characters

// function smaller to larger number function increments by one from a given number set. This will be used to increment through the ASCII chart decimal numbers to corresponding letters and so on...
function smallerToLarger(smaller, larger) {
  var array = []
  for (let i = smaller; i <= larger; i++) {

    array.push(i)
  }

  return array

}

//Apply smalltoLarger function to characters to create an Array from ASCII chart. Array will creat a string of numbers 
var charUpperCase = smallerToLarger(65, 90);
var charLowerCase = smallerToLarger(97, 122);
var charNumbers = smallerToLarger(48, 57);
var specialChar = (smallerToLarger(33, 47))
  .concat(smallerToLarger(58, 64))
  .concat(smallerToLarger(91, 96))
  .concat(smallerToLarger(123, 126));

//Assign Array to new variables and then map to convert string to numbers to number values. This will now print an Array of numbers, letters, special characters from ASCII chart
var UPPERCASE = charUpperCase.map(num => String.fromCharCode(num));
var LOWERCASE = charLowerCase.map(num => String.fromCharCode(num));
var NUMBERS = charNumbers.map(num => String.fromCharCode(num));
var SPEC_CHAR = specialChar.map(num => String.fromCharCode(num));
//default value if cancelled in prompts

//generate password function
//console.log gives undefined. possible issue with return value to passwordCharacters or logic in if else statements
function generatePassword(passwordLength, upperCase, lowerCase, specChar, withNumbers) {

  let startCodes = LOWERCASE;
  if (upperCase == true)
  {startCodes = startCodes.concat(UPPERCASE);}
  if (lowerCase == true) 
  {startCodes = startCodes.concat(LOWERCASE);}
  if (specChar == true)
  {startCodes = startCodes.concat(SPEC_CHAR);}
  if (withNumbers == true) 
  {startCodes = startCodes.concat(NUMBERS);}
else{

  startCodes;
}
  const passwordCharacters = []
  for (let i = 0; i < passwordLength; i++) {
    const characterCode = startCodes[Math.floor(Math.random() * startCodes.length)]
   passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('');
}


function writePassword() {
  var password = generatePassword(passwordLength, upperCase, lowerCase, specChar, withNumbers)
  // Write password to the #password input
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
