'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { userModel } = require('../models');

module.exports = async(req, res, next) => {
  // console.log(req);
  let { authorization } = req.headers;
  console.log('auth string', authorization);
  // Basic UnlhbjpwYXNzMTIz

  //1. isolated the encoded part of the string
  let authString = authorization.split(' ')[1];
  console.log('authString:', authString);

  //2. I need to decode the isolated string
  let decodedAuthStr = base64.decode(authString);
  console.log('decodedAuthStr:', decodedAuthStr);
  //3. I need to isolate the pass word FROM the decoded string.  username:password
  // array destructuring
  let [username, password] = decodedAuthStr.split(':');
  console.log('username: ', username, 'password: ', password);

  let user = await userModel.findOne({where: {username}});
  console.log('Lucky as a user', user);
  if(user) {
    let validUser = await bcrypt.compare(password, user.password);
    if(validUser){
      req.user = user;
      next();
    } else {
      next('Not Authorized (password incorrect');
    }
  } else {
    next('Not Authorized (user doesn\'t exist in DB)');
  }

};
