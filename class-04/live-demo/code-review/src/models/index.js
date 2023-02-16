'use strict';

require('dotenv').config();
const food = require('./food');
const clothes = require('./clothes');
const { Sequelize, DataTypes } = require('sequelize');

// we will make testable with memory db
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const clothesModel = clothes(sequelizeDatabase, DataTypes);
const foodModel = food(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  foodModel,
  clothesModel,
};
