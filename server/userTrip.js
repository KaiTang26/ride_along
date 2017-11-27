const db = require('../db'); //this is required
const Trip = require('../db/models/trip');

const User_Trip = require('../db/models/user_trip');

const router = require('express').Router({mergeParams: true});

// const cors = require('cors');
// const authCheck = require('./auth')

// router.use(cors());

router.post('/:id', function(req, res, next) {
  console.log(req.params.id);
  console.log(req.params.user_id);

  User_Trip.create({
    user_id: req.params.user_id,
    trip_id: req.params.id
  })
  .then(result => {
    console.log(result);
  })
  .catch(next);
});

router.post('/',function(req, res, next) {
  console.log(req.params.user_id);
  console.log(req.body)
  Trip.create({
    date: req.body.date,
    time: req.body.time,
    start_location: req.body.start_location,
    end_location: req.body.end_location,
    passengers: req.body.passengers,
    driver: req.params.user_id
  })
  .then(result => {
    res.sendStatus(200)
    // console.log(result[0]);
  })
  .catch(next);
  // res.sendStatus(200)
});


module.exports = router
