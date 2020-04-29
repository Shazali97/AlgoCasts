// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left  hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midPoint = Math.floor((2*n-1) / 2);
    let add;
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, level + add);
}

module.exports = pyramid;

// My Solution
// function pyramid(n) {
//     let base = n * 2 - 1;
//     for (let i = 1; i <= n; i++) {
//         let j = (i * 2) - 1;
//         let pad = (base - j) / 2
//         console.log(space.repeat(pad) + hash.repeat(j) + space.repeat(pad));
//     }
// }
