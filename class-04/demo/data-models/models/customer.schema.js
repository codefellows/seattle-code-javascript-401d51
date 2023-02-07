'use strict';

const Customer = (sequelize, DataTypes) => sequelize.define('Customers', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Customer;
