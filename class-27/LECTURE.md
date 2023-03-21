# React: The useState() Hook

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/GpGogUtBR)

## Code Challenge Review

- What tools did you employ to gain understanding?

Me asking ChatGPT: Can you explain insertion sort?

ChatGPT:
Sure, I'd be happy to explain insertion sort!

Insertion sort is a simple sorting algorithm that works by building a sorted list one item at a time, inserting each new element into its proper place in the sorted list. Here's how it works:

Starting with the second element in the list, compare it with the first element. If the second element is smaller than the first element, swap them.

Move to the third element, and compare it with the second element. If the third element is smaller than the second element, swap them. Then, compare the new second element with the first element, and swap them if necessary.

Continue this process for each element in the list, moving from left to right. At each step, compare the current element with the elements to its left, swapping as necessary to build a sorted list.

The algorithm is called "insertion" sort because each new element is inserted into its proper place in the sorted list.

## Array Destructuring

[array Destructuring repl](https://replit.com/@rkgallaway/array-destructuring-d51#index.js)

## Hooks

What is a "Hook"?  A function.

> Hooks are functions that let you “hook into” React state and lifecycle features from function components.  The `useState()` hook is what we'll focus on today

Using state in class components:
```javascript
  constructor(props){
    super(props);
    this.state = {
      name: 'Ryan',
    }
  }
  ```

using state in function components
```javascript
const [name, setName] = useState('Ryan');
const [pet, setPet] = useState('Lucky');
```

useState returns two pieces.  The first is the state variable.  The second is the setter function that allows us to change the state variable.
