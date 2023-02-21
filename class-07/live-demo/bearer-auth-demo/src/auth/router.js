'use strict';

const express = require('express');
const { userModel } = require('./models');
const basicAuth = require('./middleware/basic');

const router = express.Router();


router.post('/signup', async (req, res, next) => {
  try {
    let newUser = await userModel.create(req.body);
    res.status(200).send(newUser);
  } catch (e){
    next('signup error occurred');
  }
});

// starter code will different
router.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).send(req.user);
});

module.exports = router;
