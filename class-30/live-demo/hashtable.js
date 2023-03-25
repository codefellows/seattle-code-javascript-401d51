'use strict';

const { LinkedList } = require('./LinkedList');

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key){
    let characters = key.split('');
    // use the reducer pattern 
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    console.log(asciiSum);
    // multiply ascii sum by a large prime number
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  // set
  // Arguments: key, value
  set(key, value){
    // hash the key
    let position = this.hash(key);
    // square bracket notation allows me to create an object property dynamically using some variable
    let data = {[key]: value};

    // I am choosing to show you how to store in a linked list - your implementation will be different
    // using a linked list:
      // does the bucket exist?  if it does, add tot he existing bucket
      // if it does not, create the bucket and add it to the correct position in the array
    if(this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket;
    }
    // Returns: nothing
    // This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  }

  // get
  // Arguments: key
  get(key){
    let position = this.hash(key);
    // Returns: Value associated with that key in the table
    // note:  this doesn't account for collisions
    if(this.buckets[position]){
      let bucket = this.buckets[position]
      // if no linked list, it is likely just bucket.value 
      let value = bucket.head.value[key];
      return value;
    }
  }

  // has
  // Arguments: key
  has(key){
    let position = this.hash(key);
    // Returns: Boolean, indicating if the key exists in the table already.
    let result = this.buckets[position] ? true : false
    return  result;
  }
}




// keys // hint maybe use reducer to go thru the array of objects and return just an array of keys
// Returns: Collection of keys
// hash
// Arguments: key
// Returns: Index in the collection for that key

const table = new HashTable(1024);

const hashOne = table.hash('Ryan');
const hashTwo = table.hash('Marco');
const hashThree = table.hash('Mike');

console.log('hashOne:', hashOne);
console.log('hashTwo:', hashTwo);
console.log('hashThree:', hashThree);
console.log(table);
table.set('Ryan', 'he/him');
table.set('Marco', 'he/him');
table.set('Mike', 'he/him');
console.log(table);
console.log(table.get('Ryan'));
console.log('has: ', table.has('Ryan'));
console.log('has: ', table.has('Steve'));

