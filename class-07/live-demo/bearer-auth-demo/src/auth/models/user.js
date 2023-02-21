'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

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
    token: {
      type: DataTypes.VIRTUAL,
      get() {  // a method that "gets" called on "read"
        return jwt.sign({ username: this.username }, SECRET, { expiresIn: 1000 * 60 * 60 * 24 * 7 });
      },
      set() {  // a method that runs when set with "=" ***optional.  not using this today, just an FYI
        return jwt.sign({ username: this.username }, SECRET, { expiresIn: 1000 * 60 * 60 * 24 * 7 });
      },
    },
  });

  // sequelize allows ua to interact with the usermodel before adding data to the database using the beforeCreate hook.
  model.beforeCreate(async (user) => {
    let hashedPassword = await bcrypt.hash(user.password, 5);
    console.log('hashed password in before create', hashedPassword);
    user.password = hashedPassword;
  });

  model.authenticateBearer = async (token) => {
    try {
      let payload = jwt.verify(token, SECRET);
      console.log('payload:', payload);

      const user = await model.findOne({ where: { username: payload.username } });
      if (user) {
        return user;
      }
    } catch(e){
      console.error(e);
      return e;
    }
  };

  return model;
};

module.exports = userSchema;

