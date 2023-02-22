'use strict';

const { userModel } = require('../models');

module.exports = async (req, res, next) => {
  if(!req.headers.authorization){
    next('Not Authorized, no token present!');
  } else {
    try {
      // verify it is "Bearer" auth
      let authType = req.headers.authorization.split(' ')[0];
      if(authType === 'Bearer'){
        let token = req.headers.authorization.split(' ')[1];
        console.log('token form bearer middleware', token);

        let validUser = await userModel.authenticateBearer(token);
        // is this strong enough validation???
        if(validUser){
          req.user = validUser;
          next();
        }
      } else {
        next('send a token in a bearer auth string');
      }
    } catch(e){
      console.error(e);
      next(e);
    }
  }
};
