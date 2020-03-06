// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// Cleaner Solution
function reverseInt(n) {
    const reversed = n.toString().split("").reverse().join("")
    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

// My Solution
// function reverseInt(n) {
//     if (n >= 0) {
//         console.log(Number(n.toString().split("").reverse().join("").trim("0")));
//     } else {
//         console.log(Number("-" + Math.abs(n).toString().split("").reverse().join("").trim("0")));
//     }
// }

// One Line Solution
// function reverseInt(n) {
//     return (parseInt(n.toString().split("").reverse().join("")) * Math.sign(n))
// }
