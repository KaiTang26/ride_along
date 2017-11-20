'use strict';

const Product = require('./product')
const Review = require('./review');


// const Driver = require('./driver')
const Agreement = require('./agreement')
const Car = require('./car')
const Trip = require('./trip')
const User = require('./user')
const Chat = require('./chat')
const User_Trip = require('./user_trip')

Trip.hasMany(Agreement);
Agreement.belongsTo(Trip);

User_Trip.belongsTo(Trip);
User_Trip.belongsTo(User);

Chat.belongsTo(Trip);
Chat.belongsTo(User);
Trip.hasMany(Chat);

Car.belongsTo(User); // Will add DriverID to Car
User.hasMany(Car);


Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review};
