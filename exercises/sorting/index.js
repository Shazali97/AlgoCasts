// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Find largest record in array and move it to the right
function bubbleSort(arr) { // n^2 easy
    // Implement bubblesort on [10,-30,97,0,5]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j+1]) {
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    // Return sorted array
    return arr;
}

function selectionSort(arr) { // n^2 easy
    // Implement selectionSort
    // assumption
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        // validation
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (i !== indexOfMin) {
            const lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i] 
            arr[i] = lesser;
        }
    }

    return arr;
}

function mergeSort(arr) { // n*log(n) medium
     if (arr.length === 1) {
         return arr;
     }

     const center = Math.floor(arr.length / 2);
     const left = arr.slice(0, center); // center is not included
     const right = arr.slice(center); // center to end

     return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    // 2 sorted arrays
    const results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
