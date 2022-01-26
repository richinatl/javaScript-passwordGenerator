// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// First gather required data

let length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

let upperCase = confirm("Would you like to use uppercase letters?");
let lowerCase = confirm("Would you like to use lowercase letters?");
let numbers = confirm("Would you like to use numbers?");
let symbols = confirm("Would you like to symbols?");

while (!upperCase && !lowerCase && !numbers && !symbols) {
  alert("You must select at least one character type!");
  upperCase = confirm("Would you like to use uppercase letters?");
  lowerCase = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use symbols?");
}

// The generate password function took three steps

// First created a function to make arrays

function charFromLowtoHigh(low,high) {
  let array = []
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array
}

// Second, used the array function I created to make arrays from the ascii codes



// Third, the generate password function itself
  function generatePassword (upperCase,numbers,symbols) {
  const lowerChar = charFromLowtoHigh(97,122);
  const upperChar = charFromLowtoHigh(65,90);
  const numberChar = charFromLowtoHigh(48,57);
  const symbolChar = charFromLowtoHigh(34,47);
  
  // I set the lowercase as default, then added if statements for the others
  let charCodes = lowerChar
  
  if (upperCase = true) charCodes = charCodes.concat(upperChar)
  if (numbers = true) charCodes = charCodes.concat(numberChar)
  if (symbols = true) charCodes = charCodes.concat(symbolChar)
  
  let password = []

// Made a for loop, then pushed to characters into the empty array
// Converted the array to a string to complete the project
  for (let i = 0; i < length; i++) {
    let character = charCodes[Math.floor(Math.random() * charCodes.length)]
    password.push(String.fromCharCode(character));
    
  }
  return password.join('');
}
