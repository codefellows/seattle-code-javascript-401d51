'use strict';

// creating a Node class -specific to Linked Lists
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  // this is extra for demo -> will just console.log node values
  traverse(){
    let current = this.head;
    let results = [];
    // pattern for traversing a  linked list.  ALWAYS
    while(current){
      // do the thing (with each node)
      results.push(current.value);
      current = current.next;
    }
    // this is where I could add something the end!
    return results;
  }

  // not required, but we'll do this in class
  // add things to the END of the linked list
  add(value){
    const node = new Node(value);
    // if there is no head, we create one!
    if(!this.head){
      this.head = node;
      // if we add the head, terminate operation or we'll add node twice
      return this;
    }

    let current = this.head;

    // off by one errors are real.  when traversing is it current or current.next.  we have use cases for both
    // if there is a next node, we enter while loop
    while(current.next){ 
      // we move the current pointer to the next node
      current = current.next; 
    }
    // we've found the end and we can assign the NEW NODE as the next node in the linked list 
    current.next = node;
    return this;
  }

  // prepend things to linked list - your assignment - google pre-pending to a linked list
  insert(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  toString(){
    let current  = this.head;
    let result = '';
    while(current){
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    
    result += 'NULL';
    return result;
  }

  includes(value){
    let current = this.head;
    let result = false;
    // pattern for traversing a  linked list.  ALWAYS
    while(current){
      // do the thing (with each node)
      if(current.value === value){
        result = true;
      }
      current = current.next;
    }
    return result;
  }
}

let linkedList = new LinkedList();

// if manually adding to linked list, create node and assign it manually 
// let nodeA = new Node('a');
// let nodeB = new Node('b');
// let nodeC = new Node('c');
// let nodeD = new Node('d');

// linkedList.head = nodeA
// linkedList.head.next = nodeB
// linkedList.head.next.next = nodeC
// linkedList.head.next.next.next = nodeD

// uses the add method which adds to end of array
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);



// console.log(JSON.stringify(linkedList));
// let result = linkedList.traverse();
// let result = linkedList.toString();
// console.log(result);


module.exports = {
  Node,
  LinkedList,
};
