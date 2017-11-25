const api = module.exports = require('express').Router();
const reviews = require('./reviews');
const users = require('./users');
const trips = require('./trips');
const agreements = require('./agreements');


// import products from './products';
api
  .get('/express-test', (req, res) => {
  res.send({express: 'working!'})}) //demo route to prove api is working
  .use('/reviews', reviews)
  .use('/users', users)
  .use('/trips', trips)
  .use('/agreement', agreements)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
