// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
    }

    insertFirst(data) {
        // new head is added and old head is referenced 
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // let node = this.head;
        // if (!node.next) {
        //     this.clear();
        // }
        // node = node.next
        if (!this.head) {
            return;
        }
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        // retrieve last node
        const last = this.getLast();
        if (last) {
            // There are existing nodes in the chain
            last.next = new Node(data);
        } else {
            // The chain is empty
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let node = this.head;
        let counter = 0;
        while(node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        // empty list
        if (!this.head) {
            return null;
        }
        // first and only node
        if (!this.head.next) {
            return null;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        // in between
        let previous = this.getAt(index - 1);
        let node = previous.next;
        previous.next = node.next;

    }

    insertAt(data, index) {
        if (!this.head) {
            this.insertFirst(data);
            return;
        }
        if (index === 0){
            this.head = new Node(data, this.head);
            return;
        } 
        if (index >= this.size()) {
            this.insertLast(data);
            return;
        }
        let prev = this.getAt(index - 1) || this.getLast ;
        let newNode = new Node(data, prev.next);
        prev.next = newNode;

    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
