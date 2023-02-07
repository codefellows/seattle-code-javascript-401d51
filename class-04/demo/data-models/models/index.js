'use strict';

require('dotenv').config();
const POSTGRES_URI = process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./lib/collection.js');
const customerSchema = require('./customer.schema.js');
const orderSchema = require('./order.schema.js');

let sequelize = process.env.NODE_ENV === 'test' ? new Sequelize('sqlite::memory:') : new Sequelize(POSTGRES_URI);

const customerModel = customerSchema(sequelize, DataTypes);
const orderModel = orderSchema(sequelize, DataTypes);

// create our associations that will add `foreign KEYS` to our SQL tables
customerModel.hasMany(orderModel, { foreignKey: 'customerId', sourceKey: 'id'});
orderModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id'});

// create the collection class for each model
const customerCollection = new Collection(customerModel);
const orderCollection = new Collection(orderModel);

module.exports = {
  db: sequelize,
  Orders: orderCollection,
  Customers: customerCollection,
}
