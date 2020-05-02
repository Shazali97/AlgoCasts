// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {}; // create a cache to store values
    return function(...args) { // idk how many args
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }
    
    //make sure to call memoized function here
    return fib(n-1) + fib(n-2); 
}

// calls the memoize method on the 'slowFib'
// returns a function assigned to 'fib'
const fib = memoize(slowFib);

module.exports = fib;

// Iterative Solution
// function fib(n) {
//     let arr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         let nth = arr[i - 1] + arr[i - 2];
//         arr.push(nth);
//     }
//     return arr[n];
// }

/*
    Time/Space Complexity:

    Linear

    ✓ Fib function is defined (6ms)
    ✓ calculates correct fib value for 1 (1ms)
    ✓ calculates correct fib value for 2 (1ms)
    ✓ calculates correct fib value for 3
    ✓ calculates correct fib value for 4 (1ms)
    ✓ calculates correct fib value for 39
        >>> Each takes about the same time to run <<<

*/

// Recursive Solution -- MEMORIZE THIS AND YOU'RE GOLDEN!
// function fib(n) {
//     if (n < 2) {
//         return n; 
//     }
//     return fib(n-1) + fib(n-2);
// }

/*
    Time/Space Complexity:

    EXPONENTIAL TIME!! 
    HELL NO!!
    BIG RED FLAG!!

    ✓ Fib function is defined (4ms)
    ✓ calculates correct fib value for 1 (1ms)
    ✓ calculates correct fib value for 2
    ✓ calculates correct fib value for 3 (1ms)
    ✓ calculates correct fib value for 4
    ✓ calculates correct fib value for 39 >>>(922ms)<<<

*/