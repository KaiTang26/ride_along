'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const User_Trip = db.define('user_trips', {
  trip_id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
});

module.exports = User_Trip;
