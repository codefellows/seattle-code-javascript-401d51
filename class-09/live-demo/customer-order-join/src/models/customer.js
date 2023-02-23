'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('customers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pronouns: {
      type: DataTypes.ENUM,
      values: ['they/them', 'she/her', 'he/him'],
      allowNull: true,
    },
  });
};
