const db = require('../db') //this is required
const Agreement = require('../db/models/agreement');

const router = require('express').Router()

router.get('/:id', function(req, res, next) {
  Agreement.findAll({
    where: {trip_id: req.params.id}
  })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

// router.post('/:id', function(req, res, next) {
//   Agreement.findAll({
//     where: {trip_id: req.params.id}
//   })
//     .then(result => {
//         res.status(200).send(result);
//     })
//     .catch(next);
// });

// router.get('/:id', function(req, res, next) {
//   Driver.findOne({
//       where:{id:req.params.id}
//     })
//     .then(result => {
//       res.status(200).send(result);
//     })
//     .catch(next);
// });

module.exports = router
