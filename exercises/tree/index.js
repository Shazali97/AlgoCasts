// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        // initialize arr
        const arr = [this.root]; // [20]
        // iterate arr
        while (arr.length) { // 1
            // node = FIRST elm in arr
            const node = arr.shift(); // []
            // push children to END of arr
            arr.push(...node.children); // [0, 40, -15]
            // call function
            fn(node);
        } 
    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            // add to START of arr
            arr.unshift(...node.children);
            fn(node);
        }
    }

}

module.exports = { Tree, Node };
