'use strict';

// equivalent imports
// const { Stack, Queue } = require('./index.js');
const { Stack, Queue } = require('./');

describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1)
  });
  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

  });
  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    let poppedValue = stack.pop();
    expect(poppedValue).toEqual(3)
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();

  });
});




