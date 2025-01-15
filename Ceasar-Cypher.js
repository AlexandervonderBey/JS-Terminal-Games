/* 
Caesar Cipher
Description: Implement a basic Caesar Cipher encryption.
Requirements:
The program should take a phrase and a shift number as inputs from process.argv.
Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
Case insensitive
A negative shift means shift to the left
A positive shift means shift to the right
Output the encrypted phrase to the console.
Example:
node caesarCipher.js "hello world" 3
# Output: khoor zruog
*/



//#################################################################################################
/*
Process flow:
1) argv is passed by user 
2) slice out string and shift number - check
3) store string to an array - check
4) join letters - check
5) split into new array with all single letters as elements - check
6) store shift number to a variable - check
7) check which index the current letter has in the alphabet - check
    7.1) keep spaces and punctuation
8) add the shift number to get shifted letters - check
    8.1) if the index exceeds 25, it must reset and count from 0 onwards - check  

Validation:
1) if argv has no string throw error - check
2) if argv has no number throw error - check
3) if no string or number has been passed throw an error - check
4) if more than 1 string literal is passed throw an error
*/ 
//#################################################################################################



// Initiation of variables including conversion to lower case
const args = process.argv.slice(2).map(arg => arg.toLowerCase());
const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Filter out string from args and return a string (not array)
const stringExpression = args.filter(arg => isNaN(arg)).join(' ');

// Split string into single letters and store in an array
const singleLetters = stringExpression.split('');

// Store shift number in a variable ignoring decimal places and including remainder of 26 to stay in alphabet interval 
const shiftNumber = parseInt(args[1], 10) % 26;

// Check index of letters in alphabet array
const shiftedArray = singleLetters.map((letter) => {
    if (letter === ' ') {
        return ' '; // keep space
    }
    const index = alphabetArray.indexOf(letter);
    if (index === -1) {
        return letter; // handle punctuation
    }
    let shiftedIndex = index + shiftNumber;
    if (shiftedIndex > 25) {
        shiftedIndex -= 26; 
    }
    return alphabetArray[shiftedIndex];
});


// Input validation 
const stringArgs = args.filter(arg => isNaN(arg));

if (!stringExpression && !shiftNumber) {
    console.error("Please provide a string literal and a number in the following format: 'example' 123");
} else if (stringArgs.length > 1) {
    console.error("Please provide only ONE string literal for encryption.");
} else if (!stringExpression) {
    console.error("Please provide a string literal to be encrypted in the following format: 'example'");
} else if (!shiftNumber) {
    console.error("Please provide a number after the string literal for encryption.");
}

// Loading animation
const waitTime = 3000; // Total time for the animation
const waitInterval = 100; // Interval for updating progress
let currentTime = 0;

const timerFinished = () => {
    clearInterval(interval); // Stop the interval
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Encrypting: 100%\n`); 
    console.log("Completed!");

    // Encrypted output and convert to string literal
    console.log("Encrypted output: " + shiftedArray.join(''));
};

const incTime = () => {
    currentTime += waitInterval;

    // Calculate progress percentage
    const progressPercentage = Math.min(Math.floor((currentTime / waitTime) * 100), 100);

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Encryption progress: ${progressPercentage}%`);
};

// Start the interval and timeout
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);

