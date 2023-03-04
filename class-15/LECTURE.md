# Trees

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/5iHb9AJGR)

## Big O

### Helpful Rules

1. Different steps are added.  `n` plus `n` equals `n`
1. Drop Constants.  `2n` translates to `n`
1. Different inputs translate to different variables.  (so likely not O(n^2))
  - if given two arrays, and you run nested for loops to find the  number common values in that array
1. Drop non-dominant terms.  n plus n<sup>2</sup>  what we really care about is n<sup>2</sup>

## Binary Tree

> hierarchical collection of nodes.  start with a single root note, and then have (up to) a series of left or right children which behave as sub roots


### terminology

- k-ary: each node has "k" number of children
- Binary Tree:  each node has up to 2 (and no more) children
- balanced: nodes are inserted from top to bottom and maximum of one partially filled level
- leaf: last node(s) in a tree.  a node in a tree with NO children
- edge or edge weight - stay tuned
- path: the route taken from starting node to an ending node (1.e. root to leaf)
- binary search tree: sorted binary tree: lesser values always go the left of the root and sub-roots

### Traversals

#### Depth First Traversal

> from root to leaf - uses stack (or recursion and call stack);

- pre-order traversal
- in order traversal - Binary Search Tree - returns "sorted" smallest to greatest
- post order traversal

> Goal: look at a tree, and predict what each of these traversals would return

#### Breadth First Traversal

> read all nodes on 1st level, then the second, the third etc... - queue
