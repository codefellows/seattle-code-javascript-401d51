# Warm Up

## `filter()` method

The filter() method creates a new structure with all elements that pass the test implemented by the provided function.

The input should be an array or an object and a callback function that receives `value` and an array `index` or an object `key` as parameters.

- Run the callback for each element in the structure.
- Return a new structure, containing only those elements for which the callback returned `true`.

```javascript
// input:  array, callback
let array = [1,2,3,4];

filter(array, (val,idx) => {
  return !(val % 2);
});

// output
// [2,4]
```
