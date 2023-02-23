'use strict';

const express = require('express');
// equivalent statements with the import
// const customerModel = require('../models/index');
const { orderCollection } = require('../models');

const router = express.Router();

router.get('/order', async (req, res, next) => {
  const orders = await orderCollection.read();
  res.status(200).send(orders);
});

router.get('/order/:id', async (req, res, next) => {
  const singleOrder = await orderCollection.read(req.params.id);
  res.status(200).send(singleOrder);
});

router.post('/order', async (req, res, next) => {
  try {
    console.log('this is the body', req.body);
    const newOrder = await orderCollection.create(req.body);
    res.status(200).send(newOrder);
  } catch(e){
    next(e);
  }
});

router.put('/order/:id', async (req, res, next) => {

  const ordersModified = await orderCollection.update(req.body, req.params.id);
  res.status(200).send(ordersModified);
});

router.delete('/order/:id', async (req, res, next) => {
  let response = await orderCollection.delete(req.params.id);
  res.status(200).send(response);
});


module.exports = router;

