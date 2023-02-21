'use strict';

const { start } = require('./src/server');
const { sequelizeDatabase } = require('./src/auth/models');
// 3rd party requirements
// require('dotenv').config();
// const express = require('express');
// const base64 = require('base-64');
// const bcrypt = require('bcrypt');
// const { Sequelize, DataTypes } = require('sequelize');

// const PORT = process.env.PORT || 3002;
// const app = express();

// app.use(express.json());

// database URL set up (test or dev)
// const DATABASE_URL = process.env.NODE_ENV === 'test' 
//   ? 'sqlite::memory' 
//   : process.env.DATABASE_URL;

// const sequelizeDatabase = new Sequelize(DATABASE_URL);

// allows us to accept webform data.  aka process FORM input and add to request body
// app.use(express.urlencoded({extended: true}));

// Create a User Model
// const userModel = sequelizeDatabase.define('users', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// sequelize allows ua to interact with the usermodel before adding data to the database using the beforeCreate hook.
// userModel.beforeCreate((user) => {
//   console.log('our user', user);
// });

// const basicAuth = async(req, res, next) => {
//   // console.log(req);
//   let { authorization } = req.headers;
//   console.log('auth string', authorization);
//   // Basic UnlhbjpwYXNzMTIz

//   //1. isolated the encoded part of the string
//   let authString = authorization.split(' ')[1];
//   console.log('authString:', authString);

//   //2. I need to decode the isolated string
//   let decodedAuthStr = base64.decode(authString);
//   console.log('decodedAuthStr:', decodedAuthStr);
//   //3. I need to isolate the pass word FROM the decoded string.  username:password
//   // array destructuring
//   let [username, password] = decodedAuthStr.split(':');
//   console.log('username: ', username, 'password: ', password);

//   let user = await userModel.findOne({where: {username}});
//   console.log('Lucky as a user', user);
//   if(user) {
//     let validUser = await bcrypt.compare(password, user.password);
//     if(validUser){
//       req.user = user;
//       next();
//     } else {
//       next('Not Authorized (password incorrect');
//     }
//   } else {
//     next('Not Authorized (user doesn\'t exist in DB)');
//   }

// };

// app.post('/signup', async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     const encryptedPassword = await bcrypt.hash(password, 5);

//     let newUser = await userModel.create({
//       username, 
//       password: encryptedPassword,
//     });
//     res.status(200).send(newUser);
//   } catch (e){
//     next('signup error occured');
//   }
// });

// // starter code will different
// app.post('/signin', basicAuth, (req, res, next) => {
//   res.status(200).send(req.user);
// });

sequelizeDatabase.sync()
  .then(() => {
    console.log('successful connection');
    start();
    // app.listen(PORT, () => console.log('listening on port: ', PORT));
  })
  .catch(e => console.error(e));
