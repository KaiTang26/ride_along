'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Agreement_User = db.define('agreement_users', {
  agreement_id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
  trip_id: Sequelize.INTEGER,
  agree: Sequelize.BOOLEAN
});

module.exports = Agreement_User;
