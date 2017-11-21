'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Trip = db.define('trips', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false
  },
  start_location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  end_location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  driver: Sequelize.INTEGER,
  passengers: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Trip;
