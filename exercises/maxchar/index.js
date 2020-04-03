// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const arr = str.split("")
    const chars = {};
    let max = 0;
    let maxChar = '';

    for (let characters of arr) { 
        if (!chars[characters]) {
            chars[characters] = 1;
        } else {
            chars[characters]++;
        }
        // chars[characters] = chars[characters] + 1 || 1
    }

    for (let characters in chars) {
        if (chars[characters] > max) {
            max = chars[characters]
            maxChar = characters
        }
    }

    return maxChar
}

maxChar("Hello there!");

module.exports = maxChar;
