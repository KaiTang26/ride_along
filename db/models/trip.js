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
  },
  origin: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  },
  destination: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  },
  price:{
    type:Sequelize.INTEGER,
    allowNull: false
  },
  description:{
    type: Sequelize.STRING,
    allowNull: false
  },
  polygon:{
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.FLOAT)),
    allowNull: false
  },
  direction:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  distance:{
    type: Sequelize.STRING,
    allowNull: false
  },
  duration:{
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = Trip;
