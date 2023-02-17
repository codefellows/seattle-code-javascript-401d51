'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const oldHead = this.head;
    this.head = new Node(value);
    this.head.next = oldHead;

    // or
    // this.head = new Node(value, this.head);
  }

  toString() {

    let current = this.head;
    let text = '';

    // walk around
    while(current) {

      // do something
      text += `{ ${current.value} } -> `;

      current = current.next;
    }
    // return '{ banana } -> { apple } -> NULL';

    return text + 'NULL';
  }
}

class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
