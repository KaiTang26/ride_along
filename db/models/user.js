'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      startsWithUpper(name) {
        const first = string.charAt(0);
        const startswithUpper = first === first.toUpperCase();
        if (!startsWithUpper) {
          throw new Error("First letter must be an uppercase letter.") 
        }
      }
    }
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: Sequelize.STRING,
  picture: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

modules.exports = User;