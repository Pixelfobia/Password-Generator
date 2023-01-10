// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * Math.floor(arr));
}

function shuffle(array) {
  var m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Function to generate password with user input
function generatePassword() {
  var allChosenCharacters = [];
  var finalPassword = [];
  var validatorCounter = 0;

  characterLength = prompt(
    "How many characters long would you like your password to be? \nMinimum: 10 Digits \nMaximum: 64 Digits"
  );

  if (characterLength > 9 && characterLength < 64) {
  } else {
    return "Please choose password length between 10 and 64 digits";
  }

// Function to prompt user for password options

  confirmLowerCase = confirm(
    "Would you like to have lowercase letters?"
  );
  if (confirmLowerCase) {
    allChosenCharacters = allChosenCharacters.concat(lowerCasedCharacters);
    var rand = getRandom(lowerCasedCharacters.length);
    finalPassword.push(lowerCasedCharacters[rand]);
    validatorCounter++;
  }

  confirmUpperCase = confirm(
    "Would you like to have uppercase letters?"
  );
  if (confirmUpperCase) {
    allChosenCharacters = allChosenCharacters.concat(upperCasedCharacters);
    var rand = getRandom(upperCasedCharacters.length);
    finalPassword.push(upperCasedCharacters[rand]);
    validatorCounter++;
  }

  confirmNumbers = confirm(
    "Would you like to have numbers?"
  );
  if (confirmNumbers) {
    allChosenCharacters = allChosenCharacters.concat(numericCharacters);
    var rand = getRandom(numericCharacters.length);
    finalPassword.push(numericCharacters[rand]);
    validatorCounter++;
  }

  confirmSpecialCharacters = confirm(
    "Would you like to have special characters?"
  );
  if (confirmSpecialCharacters) {
    allChosenCharacters = allChosenCharacters.concat(specialCharacters);
    var rand = getRandom(specialCharacters.length);
    finalPassword.push(specialCharacters[rand]);
    validatorCounter++;
  }

  if (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmNumbers === false &&
    confirmSpecialCharacters === false
  ) {
    return "Please be sure to choose at least one option! \nPress the button to try again!";
  }

  // Final Password generation
  for (i = 0 + validatorCounter; i < characterLength; i++) {
    var rand = getRandom(allChosenCharacters.length);
    finalPassword.push(allChosenCharacters[rand]);
  }

  shuffle(finalPassword);
  return finalPassword.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

