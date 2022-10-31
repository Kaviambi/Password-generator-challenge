// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max)
{
  if(!max){
    max=min;
    min =0;
  }
  var rand = Math.random()
  return Math.floor(min*(1- rand) + rand*max)
}
function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword(){

  var userDate = window.prompt("What is the length of the password?");
  var passwordLength = parseInt(userDate);

  if(isNaN(passwordLength)) {
    window.alert("That is not a number. Please enter the number!");
  }

  if(passwordLength < 8 || passwordLength > 128) {
      window.alert("password length must be between 8 and 128!");
      
  }

var userNumbers = window.confirm(" Would you like to add numbers in your password?");
var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var userSymbols = window.confirm(" Would you like to add symbols in your password?");
var symbolList = [",", "/", "@", "#", "$", "%", "^", "&", "*", "|"];

var userUppercase = window.confirm(" Would you like to add Uppercase letters in your password?");
var UppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var userLowercase = window.confirm(" Would you like to add Lowercase letters in your password?");
var LowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// All the selected characters store in generateresult 
var generateresult = [];

//if the user wants to include number in password 
if(userNumbers === true) {
    generateresult.push(numList)
}

if(userSymbols === true) {
    generateresult.push(symbolList)
}

if(userUppercase === true) {
    generateresult.push(UppercaseList)
}

if(userLowercase === true) {
    generateresult.push(LowercaseList)
}

var generatedPassword = ""

for (var i=0; i < passwordLength; i++) {
  var randomList = getRandomItem(generateresult);
  var randomChar = getRandomItem(randomList);
  generatedPassword += randomChar;
}
return generatedPassword;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
