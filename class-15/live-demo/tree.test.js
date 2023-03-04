'use strict';


const { Node, Tree } = require('./index');

describe('Tree', () => {
  let tree = new Tree();
  tree.root = new Node(10);
  tree.root.left = new Node(5);
  tree.root.right = new Node(15);
  tree.root.left.left = new Node(1);
  tree.root.left.right = new Node(8);
  tree.root.right.right = new Node(17);
  
  it('can be created as expected', () => {
    
    expect(tree.root.value).toEqual(10);
    expect(tree.root.right.left).toBeNull();

  });

  it('returns pre-order array as expected', () => {
    const results = tree.preOrder();

    expect(results).toEqual([10, 5, 1, 8, 15, 17]);
  })
});
