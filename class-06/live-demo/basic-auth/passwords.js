'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');

// console.log('---------BASE 64---------');

let str = 'Lucky wants to go outside';
let encodedStr = base64.encode(str);
let decodedStr = base64.decode(encodedStr);

// console.log('str:', str);
// console.log('encodedStr:', encodedStr);
// console.log('decodedStr:', decodedStr);

// encode a Basic auth string:  username:password

let user = 'Ryan:pass';
let encodedUser = base64.encode(user);
console.log({encodedUser});

// WHY encode?  secure signin information as we log into our server.

// create a  basic auth string

let authString = `Basic ${encodedUser}`;
// console.log('authString:', authString); // Basic UnlhbjpwYXNz

console.log('---------Hashing with bcrypt---------');

// let password = 'pass12345';
let password = 'pass123';

const encrypt = async (password) => {
  let hash = await bcrypt.hash(password, 5);
  console.log(hash);

  let hashOne = '$2b$05$KnDvw6r35uwXjlqDMpFwCuBiDBbPC.w4Uv/oYyIOn0BUzb1F2Lo36';
  let hashTwo = '$2b$05$zlSaPHo9rZc4cjiqAQskrOvnDbrcDLQ6U3T1oEPw42AgMsoXoCRDq';
  let hashThree = '$2b$05$xB2E/f/26plnv5avX6ivKui0UWg/d/w98y2QDT83erLoex/hHn7Lm';

  let firstResult = await bcrypt.compare(password, hashOne);
  let secondResult = await bcrypt.compare(password, hashTwo);
  let thirdResult = await bcrypt.compare(password, hashThree);

  console.log(firstResult, secondResult, thirdResult);
};

let results = encrypt(password);
console.log(results);


