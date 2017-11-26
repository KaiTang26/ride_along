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
  // Agreement.findOne({
  //   where: {trip_id: req.params.id}
  // }).
  Agreement.create({
    statement: req.body.condition,
    trip_id: req.params.id
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
