'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// useful for a later code challenge
class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k).fill(null);
  }
}

// useful for a later code challenge
class KaryTree {
  constructor() {
    this.root = null;
  }
}

// binary tree
class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {  // notice the pattern!!!!
    const results = [];

    // recursive helper funciton
    const traverse = (node) => {
      // do the thing FIRST if it's PRE-ORDER
      // base case!
      results.push(node.value);

      // left and right recursive cases
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right)
      }
    }

    // GET THE PARTY STARTED!
    traverse(this.root)

    return results;
  }

  inOrder() {
    const traverse = (node) => {
      // recursive left case
      if (node.left) traverse(node.left);
      
      // base case
      console.log(node.value);

      // recursive right case
      if (node.right) traverse(node.right);

    }
    // get the party started
    traverse(this.root);
  }

  postOrder() {
    const traverse = (node) => {
      // recursive left case
      if (node.left) traverse(node.left);
      
      // recursive right case
      if (node.right) traverse(node.right);
      
      // base case
      console.log(node.value);

    }
    // get the party started
    traverse(this.root);
  }
}

let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

// tree.inOrder();
// tree.postOrder();
const results = tree.preOrder();
console.log('results:', results);

module.exports = { Node, Tree };
