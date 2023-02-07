'use strict';

const Order = (sequelize, DataTypes) => sequelize.define('Orders', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Order;
