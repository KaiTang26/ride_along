'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Car = db.define('cars', {
  model: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  color: {
  	type: Sequelize.STRING,
    defaultValue: false
  }
});

module.exports = Car;
