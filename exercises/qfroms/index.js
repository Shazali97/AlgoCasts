// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        // initialize stack(s)
        this.first  = new Stack();
        this.second = new Stack();
    }

    add(record) {
        // push record to first stack
        this.first.push(record);
    }

    remove() {
        // make sure there is content in the stack
        while (this.first.peek()) {
            // pop first stack -- last element
            // push it to end of second stack
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while (this.second.peek()) {
            // pop second stack -- last element
            // push it to end of first stack
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while (this.first.peek()) {
            // const record = this.first.pop();
            // this.second.push(record);
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

}

module.exports = Queue;

