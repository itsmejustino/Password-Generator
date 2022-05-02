// Assignment Code
var generateBtn = document.querySelector("#generate");

//Assign criteria to each variable
var upperCase;
var lowerCase;
var includeNumbers;
var specialChar;

//store user input to new values
var choiceLength = window.prompt("How many characters would you like between 8-128 characters? (Okay for Yes and Cancel to Start Over)");
var upperCase = window.confirm("Would you like to generate a password with Upper case letters? (Okay for Yes and Cancel for No)");
var lowerCase = window.confirm("Would you like to generate a password with Lower case letters? (Okay for Yes and Cancel for No)");
var specChar = window.confirm("Would you like to generate a password with special characters? (Okay for Yes and Cancel for No)");
var withNumbers = window.confirm("Would you like to generate a password with numbers? (Okay for Yes and Cancel for No)");
var characterLength = choiceLength;





function smallerToLarger (smaller, larger, ){
  var array = []
  for(let i = smaller; i <= larger; i++){

    array.push(i)
  }
  
  return array
  
  }
  

var charUpperCase = String.fromCharCode(smallerToLarger(65,90));
var charLowerCase = String.fromCharCode(smallerToLarger(97, 122));
var charNumbers = String.fromCharCode(smallerToLarger(48, 57));
var specialChar = String.fromCharCode(smallerToLarger(33, 47))
    .concat(String.fromCharCode(smallerToLarger(58, 64)))
    .concat(String.fromCharCode (smallerToLarger(91, 96)))
    .concat(String.fromCharCode(smallerToLarger(123, 126)));





function generatePassword(characterLength, charUpperCase, charLowerCase, specialChar){

  console.log(characterLength)

  if(upperCase && lowerCase && specChar && withNumbers && characterLength == true){
    password = generatePassword(characterLength, charUpperCase, charLowerCase, specialChar)
    
    } else if(upperCase && lowerCase && specChar && withNumbers == false){
     alert("Cannot make password with given criteria");
    }
    


  //Condition for length of password 
 //Upper Case condition
 //lower Case condition
  //number condition
 //special Char condition

 
 const passwordCharacters = []
   for (let i = 0; i < characterLength; i++) {
     const characterCode = charCodes[Math.floor(Math.random() * characterLength)];
     characterLength.push(String.fromCharCode(characterCode))
   }
   return passwordCharacters.join('');
   
 }
 


function writePassword() {
 var password = generatePassword();
// Write password to the #password input
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
