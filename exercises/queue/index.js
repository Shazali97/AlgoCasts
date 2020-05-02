// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue(); // <<< 'new instance'
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    // initialize an array and assign it
    constructor() { // called when new instance is created
        this.data = [];
    }

    add(record) {
        // adds to the front of array
        this.data.unshift(record);
    }

    remove() {
        // removes from the end of array
        return this.data.pop();
    }
}

module.exports = Queue;
