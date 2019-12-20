var resultEl = document.querySelector('.tetra');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var clipboard = document.getElementById('copy');
-
var randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
}




// make an array of lowercase letters
let uppercase = ['U', 'X']
// make an array of uppercase letters
// make an array of symbols
// create an empty array that will hold your random letters
// for loop to go through array
  for(var i=0; i < uppercase.length; i++){
    var randomNum = Math.floor(Math.random() * 27)
    var randomLetter = uppercase[randomNum]
    // save this variable by pushing it to an empty array
    
  }
  
  // you will have a list of random letters
  // which will be generated password



















clipboard.addEventListener('click', function() {
	var textarea = document.createElement('textarea');
	var password = resultEl.innerText;
	// I DONT UNDERSTAND THIS CODE!!!!!!!!!!!!!!!
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generateEl.addEventListener('click', function() {
	var length = +lengthEl.value;
	var hasLower = lowercaseEl.checked;
	var hasUpper = uppercaseEl.checked;
	var hasNumber = numbersEl.checked;
	var hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	var generatedPassword = '';
	var typesCount = lower + upper + number + symbol;
	var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}}