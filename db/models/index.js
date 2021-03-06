'use strict';

// const Driver = require('./driver')
const Review = require('./review');
const Agreement = require('./agreement')
const Car = require('./car')
const Trip = require('./trip')
const User = require('./user')
const Chat = require('./chat')
const User_Trip = require('./user_trip')
const Agreement_User = require('./agreement_user')

Trip.hasMany(Agreement);
Agreement.belongsTo(Trip);

Agreement_User.belongsTo(User);
Agreement_User.belongsTo(Trip);
// Agreement_User.belongsTo(Agreement);

Agreement.hasMany(Agreement_User);
Agreement_User.belongsTo(Agreement);
// // Agreement_User.belongsTo(Trip);
// // Agreement_User.belongsTo(Agreement);

User.hasMany(User_Trip);
User_Trip.belongsTo(Trip);
User_Trip.belongsTo(User);
Trip.hasMany(User_Trip);

Chat.belongsTo(Trip);
Chat.belongsTo(User);
Trip.hasMany(Chat);

Car.belongsTo(User); // Will add DriverID to Car
User.hasMany(Car);

User.hasMany(Review);
Review.belongsTo(User);

Trip.hasMany(Review);
Review.belongsTo(Trip);

module.exports = {Agreement, Agreement_User};
