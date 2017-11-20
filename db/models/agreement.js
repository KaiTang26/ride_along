'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Agreement = db.define('agreements', {
  statement: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  numberAgreed: Sequelize.INTEGER
});

module.exports = Agreement;
