'use strict';

const bcrypt = require('bcrypt');

const userSchema = (sequelizeDatabase, DataTypes) => {
  const model = sequelizeDatabase.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  model.beforeCreate(async (user) => {
    let hashedPassword = await bcrypt.hash(user.password, 5);
    console.log('hashed password in before create', hashedPassword);
    user.password = hashedPassword;
  });

  return model;
};

module.exports = userSchema;
