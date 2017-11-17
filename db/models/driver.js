'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Driver = db.define('drivers', {
  license: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },
  approved: {
  	type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Driver;
