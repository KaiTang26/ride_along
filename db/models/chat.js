'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Chat = db.define('chats', {
  message: Sequelize.STRING
});

module.exports = Chat;
