const db = require('../db') //this is required
const Trip = require('../db/models/trip');

const router = require('express').Router()

router.get('/', function(req, res, next) {
  Trip.findAll()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

router.get('/:id', function(req, res, next) {
  Trip.findOne({
      where:{id:req.params.id}
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router
