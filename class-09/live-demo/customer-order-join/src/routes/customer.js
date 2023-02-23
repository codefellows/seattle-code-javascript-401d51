'use strict';

const express = require('express');
// equivalent statements with the import
// const customerModel = require('../models/index');
const { customerCollection } = require('../models');
const { orderCollection } = require('../models');


const router = express.Router();

router.get('/customer', async (req, res, next) => {
  const customers = await customerCollection.read();
  res.status(200).send(customers);
});

router.get('/customer/:id', async (req, res, next) => {
  const singleFoodItem = await customerCollection.read(req.params.id);
  res.status(200).send(singleFoodItem);
});

router.get('/customerWithOrders/:id', async (req, res, next) => {
  const customerWithOrders = await customerCollection.readManyToOne(req.params.id, orderCollection.model);
  res.status(200).send(customerWithOrders);
});

router.post('/customer', async (req, res, next) => {
  try {
    console.log('this is the body', req.body);
    const newCustomer = await customerCollection.create(req.body);
    res.status(200).send(newCustomer);
  } catch(e){
    next(e);
  }
});

router.put('/customer/:id', async (req, res, next) => {

  const customersModified = await customerCollection.update(req.body, req.params.id);
  res.status(200).send(customersModified);
});

router.delete('/customer/:id', async (req, res, next) => {
  let response = await customerCollection.delete(req.params.id);
  res.status(200).send(response);
});


module.exports = router;

