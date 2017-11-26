const db = require('../db') //this is required
const Review = require('../db/models/review');

const router = require('express').Router()


// router.get('/:id', function(req, res, next) {
//   Review.findOne({
//     where:{id:req.params.id},
//     include: [Product]
//     })
//     .then(result => {
//         res.status(200).send(result);
//     })
//     .catch(next);
// });

// Don't think I need this, should be replaced by user/:id/reviews

// router.get('/:trip_id', function(req, res, next) {
//   Review.findAll({
//     where:{trip_id:req.params.id}
//   })
//   .then(result => {
//     res.status(200).send(result);
//   })
//   .catch(next);
// });

router.post('/:trip_id', function(req, res, next) {
  // console.log("req",req);
  console.log("req",req.body);
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
