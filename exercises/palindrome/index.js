// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My Solution
function palindrome(str) {
    let rev = str.split("").reverse().join("")
    return str === rev
}

module.exports = palindrome;


// 2nd solutions
// Start from this and improve to a better way
// Will show interviewer that you know how to solve multiple ways
// function palindrome(str) {
//     return str.split("").every((char, i) => {
//         return char === str[str.length - i - 1];
//     });
// }