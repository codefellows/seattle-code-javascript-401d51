# Reducer Pattern:  useReducer() Hook in React

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/cpcaGI8BP)

[Reduce repl](https://replit.com/@rkgallaway/reduce-fun-401d48d8#index.js)

## Review

### Comparator Code Challenge Feedback

### Lab-28

see recording, and class repo for code

## Reducer Pattern

You have all used the `.reduce()` method in JavaScript. 
```javascript
let arr = ['ryan', 'lucky'];

let objArr = arr.reduce((newArr, objName) => {
  newArr = [...newArr, {name: objName}];
  return newArr;
}, []);
```
 - what is returned?  A NEW "OBJECT", aka an array of objects

 #### Pure Function:
  > a function that takes in input, does some processing and returns an expected, NEW object


### useReducer() Hook

- can use in place of useState()
- can manipulate state in more complex ways than useState()

```javascript
let initialState = {
  name: 'Sesame Street',
  characters: ['Elmo'],
}

function reducer(state, payload){
  return {...state, characters: [...state.characters, payload]};
}

let updatedState = reducer(initialState, 'Big Bird');
```

React realizes that managing individual state variables is complex across many components

- When updating "state", each component just needs to know what to give the reducer to update state without any mutations
