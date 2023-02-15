'use strict';

const express = require('express');
// equivalent statements with the import
// const customerModel = require('../models/index');
const { customerModel } = require('../models');

const router = express.Router();

router.get('/customer', async (req, res, next) => {
  const customers = await customerModel.findAll();
  res.status(200).send(customers);
});

router.post('/customer', async (req, res, next) => {
  try {
    console.log('this is the body', req.body);
    const newCustomer = await customerModel.create(req.body);
    res.status(200).send(newCustomer);
  } catch(e){
    next(e);
  }
});



module.exports = router;

