'use strict';

const Product = require('./product')
const Review = require('./review');


// const Driver = require('./driver')
const Agreement = require('./agreement')
const Car = require('./car')
const Trip = require('./trip')
const User = require('./user')
const Chat = require('./chat')


Trip.hasMany(Agreement);
Agreement.belongsTo(Trip);

User.belongsToMany(Trip, {through: 'UserTrip'});
Trip.belongsToMany(User, {through: 'UserTrip'});

Chat.belongsTo(Trip);
Chat.belongsTo(User);
Trip.hasMany(Chat);

Car.belongsTo(User); // Will add DriverID to Car


Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review};
