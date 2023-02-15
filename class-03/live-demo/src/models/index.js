'use strict';

require('dotenv').config();
const { Sequelize, DataTypes} = require('sequelize');
const customer = require('./customer');

// if sqlite::memory does not work, use sqlite:memory
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

// db singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const customerModel = customer(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  customerModel,
};
