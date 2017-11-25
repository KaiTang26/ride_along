const db = require('../db') //this is required
const Review = require('../db/models/review');

const router = require('express').Router()

router.get('/', function(req, res, next) {
  Review.findAll()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

router.get('/:id', function(req, res, next) {
  Review.findOne({
    where:{id:req.params.id},
    include: [Product]
    })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

router.post('/:trip_id', function(req, res, next) {
  Review.create({
    review_text: req.body.review_text,
    rating: req.body.rating,
    trip_id:req.params.trip_id
  })
  .then(review => {
    console.log(review);
  })
  .catch(next);
})

module.exports = router;
