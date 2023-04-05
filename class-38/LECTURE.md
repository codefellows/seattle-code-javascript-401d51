# Redux - Asynchronous Actions

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/JJBNsqOfj)

## Redux Thunk (async)

redux functions are handy, BUT don't async well.  
- we can think some thoughts...  but that happens quickly.
- some times we need think thoughts about what we've "thunk" about

we are going to create an "action" that is actually a function...
- if the action called is a function, that function CAN BE asynchronous
- THEN once we've thunk, we can curry those thunk results to our thoughts and we can OFFICIALLY think
- we'll have some currying going on....
```js
// we already have currying, we'll add another layer
() => () => () => {}
```

## api endpoints

- `https://api-js401.herokuapp.com/api/v1/todo`
- `https://api-js401.herokuapp.com/api/v1/products`
- `https://api-js401.herokuapp.com/api/v1/categories`



(not necessary for today's thunk)
## Redux Tool Kit

`npm i @reduxjs/toolkit`
