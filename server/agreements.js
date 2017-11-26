const db = require('../db') //this is required
const Agreement = require('../db/models/agreement');

const router = require('express').Router()

// router.get('/:id', function(req, res, next) {
//   Agreement.findAll({
//     where: {trip_id: req.params.id}
//   })
//     .then(result => {
//         res.status(200).send(result);
//     })
//     .catch(next);
// });

// Display all conditions for a trip
router.get('/:id', function(req, res, next) {
  Agreement.findAll({
    where: {trip_id: req.params.id}
  })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

// Add one condition
router.post('/ride/:id', function(req,res, next) {
  Agreement.create({
    statement: req.body.condition,
    trip_id: req.params.id
  })
  .catch(next);
})

// Edit a condition
router.put('/ride/:id/:agreementId', function(req,res, next) {
  Agreement.findOne({
    where: {
      trip_id: req.params.id,
      id: req.params.agreementId
    }
  }).then(condition => {
    condition.updateAttributes({
      statement: req.body.condition
    })
  })
  .catch(next);
})

// Edit a condition
router.delete('/ride/:id/:agreementId', function(req,res, next) {
  Agreement.destroy({
    where: {
      trip_id: req.params.id,
      id: req.params.agreementId
    }
  }).then(deleted => {
    return deleted, console.log(`Delete successful? 1 means yes, 0 means no: ${deleted}`);
  })
  .catch(next);
})

// router.post('/:id', function(req, res, next) {
//   Agreement.findAll({
//     where: {trip_id: req.params.id}
//   })
//     .then(result => {
//         res.status(200).send(result);
//     })
//     .catch(next);
// });


module.exports = router
