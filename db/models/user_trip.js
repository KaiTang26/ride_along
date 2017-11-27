'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const User_Trip = db.define('user_trips', {
  trip_id: {
    type:Sequelize.INTEGER,
    allowNull: false,
  },
  user_id:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  start:{
    type: Sequelize.STRING,
  },
  end:{
    type: Sequelize.STRING,
  }
});

module.exports = User_Trip;
