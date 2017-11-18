const db = require('../db') //this is required
const Driver = require('../db/models/driver');

const router = require('express').Router()

router.get('/', function(req, res, next) {
  Driver.findAll()
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

router.get('/:id', function(req, res, next) {
  Driver.findOne({
      where:{id:req.params.id}
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router
