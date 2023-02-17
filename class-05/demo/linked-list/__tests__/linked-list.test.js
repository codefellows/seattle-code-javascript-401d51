'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('should instantiate an empty linked list', () => {
    const linked = new LinkedList();

    expect(linked.head).toBeNull();
  });

  it('should insert at beginning of empty list', () => {
    const linked = new LinkedList();
    linked.insert('apple');

    expect(linked.head.value).toEqual('apple');
    expect(linked.head.next).toBeNull();
  });

  it('should insert at beginning of populated list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.head.value).toEqual('banana');
    expect(linked.head.next.value).toEqual('apple');
    expect(linked.head.next.next).toBeNull();
  });

  it('should display as string properly', () => {

    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    const linkedString = linked.toString();

    expect(linkedString).toEqual('{ banana } -> { apple } -> NULL');

  });

  it('should know when value is included in list', () => {

    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.includes('apple')).toBe(true);
  });

  it('should know when value is not included in list', () => {

    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.includes('cucumber')).toBe(false);
  });

});
