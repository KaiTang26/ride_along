const db = require('../db') 
const Trip = require('../db/models/trip');
const Agreement = require('../db/models/agreement');
const Agreement_User = require('../db/models/agreement_user');
const User = require('../db/models/user');

const router = require('express').Router();
const cors = require('cors');
// const authCheck = require('./auth')

// router.use(cors());
// router.use(authCheck)

// console.log(authCheck)

router.get('/', function(req, res, next) {
  Trip.findAll()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

router.get('/:id',function(req, res, next) {
  Trip.findOne({
      where:{id:req.params.id},
      include: [{
        model: Agreement, 
        include: [Agreement_User]
      }] 
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router
