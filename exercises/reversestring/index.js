// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 2nd Solution
function reverse(str) {
    // initiate empty str
    let newStr = "";
    // new for loop syntax iterate over each
    for (let character of str) {
        // put the next character ahead of the existing str 
        newStr = character + newStr
    }
    return newStr
}

module.exports = reverse;

// 1st Solution 
// function reverse(str) {
//     return str.split("").reverse().join("")
// }


// 3rd Solution
// function reverse(str) {
//     return str.split("").reduce((rev, char) => char + rev, "")
// }

// debugger;
// node inspect file.js
// 'c' to get to debugger
// 'repl' to check values
// exit and 'c' again to iterate over