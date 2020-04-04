// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My Solution
function anagrams(stringA, stringB) {
    return strTrim(stringA) === strTrim(stringB);
}

function strTrim(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

anagrams("RAIL!!!! SAFTEY   ?", "fairy tales");

module.exports = anagrams;

// My Solution
// function anagrams(stringA, stringB) {
//     let mapA = {};
//     let mapB = {};
//     let unsortedA = stringA.replace(/[^\w]/g, "").toLowerCase().split("");
//     let unsortedB = stringB.replace(/[^\w]/g, "").toLowerCase().split("");
//     let a = unsortedA.sort();
//     let b = unsortedB.sort();
//     if (a.length !== b.length) {
//         return false;
//     }
//     for (let char of a) {
//         mapA[char] = mapA[char] + 1 || 1;
//     }
//     for (let char of b) {
//         mapB[char] = mapB[char] + 1 || 1;
//     }
//     if (JSON.stringify(mapA) === JSON.stringify(mapB)) {
//         return true
//     }
// }

// Solution #1 -- helper function
// function anagrams(stringA, stringB) {
//     const mapA = buildCharMap(stringA);
//     const mapB = buildCharMap(stringB);
//     if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//         return false;
//     }
//     for (let key in mapA) {
//         if (mapA[key] !== mapB[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

// Solution #2