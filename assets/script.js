var randomLower = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
var randomUpper = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
var randomNum = function(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
var randomSym = function(){
  const special = "!@#$%^&*=-[]{}></,.?";
  return special[Math.floor(Math.random() * special.length)];
};

var generateBtn = document.querySelector("#generate");

const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNum,
  symbol: randomSym
};

const passwordLength = document.getElementById('password-length');
const lowerCase = document.getElementById('lowercase-characters');
const upperCase = document.getElementById('uppercase-characters');
const numericCharacters = document.getElementById('numeric-characters');
const specialCharacters = document.getElementById('special-characters');
const generatedPassword = document.getElementById('password');
const warning = document.getElementById('required-length');


// Get references to the #generate element

// Write password to the #password input
function writePassword() {
 const length = +passwordLength.value;
const hasLower = lowerCase.checked;
const hasUpper = upperCase.checked;
const hasNum = numericCharacters.checked;
const hasSym = specialCharacters.checked;

 generatedPassword.innerText = generatePassword(
  hasLower,
  hasUpper,
  hasNum,
  hasSym,
  length
  );
};


var generatePassword = function(lower, upper, number, symbol, length){
  let generatedPassword = ''; 

  if(length<8 || length> 128){
    warning.style.display = "inline";
    return generatePassword();

  } else {(length>8 || length< 128)}{
    warning.style.display = "hidden";
  };

  const typesCount = lower + upper + number + symbol;
    if(typesCount === 0){
    return '';
    }
  
    // console.log('typesCount:', typesCount);


//.filter is high level array method
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]
  );

    // console.log('typesArr:', typesArr);

  for(let i = 0; i< length; i += typesCount) {
    typesArr.forEach(type =>{
      const funcName = Object.keys(type)[0];
      // console.log('funcName:', funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

