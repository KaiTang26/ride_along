'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define('users', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
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
  },
  drivers_license: {
    type: Sequelize.STRING
  },
  about: {
    type: Sequelize.TEXT
  }
});

module.exports = User;