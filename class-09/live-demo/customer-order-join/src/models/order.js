'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('orders', {
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
