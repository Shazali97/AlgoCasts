// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

module.exports = steps;

/*
    Runtime Complexity:

    As 'n' increases by 1, we have to do (n*n) things

    'n^2' or 'quadratic' runtime

*/

// My Solution
// function steps(n) {
//     let hash = "#";
//     let space = " ";
//     for (i = 1; i <= n; i++) {
//         console.log(hash.repeat(i) + space.repeat(i - 1));
//     }
// }

// Recursive Solution
// function steps(n, row = 0, stair = '') {
//     if (n === row) {
//         return;
//     }

//     if (n === stair.length) {
//         console.log(stair);
//         return steps(n, row + 1);
//     }

//     stair.length <= row ? stair += '#' : stair += ' ';

//     steps(n, row, stair);
// }