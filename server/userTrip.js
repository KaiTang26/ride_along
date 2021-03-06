const db = require('../db'); //this is required
const Trip = require('../db/models/trip');

const User_Trip = require('../db/models/user_trip');

const router = require('express').Router({mergeParams: true});


// endpoint for user join trip
router.post('/join', function(req, res, next) {
 
  User_Trip.create({
    user_id: req.body.user_id,
    trip_id: req.body.trip_id,
    start: req.body.start,
    end: req.body.end
  })
  .then(result => {
    res.send(result)
  })
  .catch(next);
});


// the endpoint for post trip for each driver
router.post('/',function(req, res, next) {
  console.log(req.params.user_id);
  console.log(req.body)
  Trip.create({
    date: req.body.date,
    time: req.body.time,
    start_location: req.body.start_location,
    end_location: req.body.end_location,
    passengers: req.body.passengers,
    driver: req.params.user_id,
    origin: req.body.origin,
    destination: req.body.destination,
    price: req.body.price,
    description: req.body.description,
    polygon: req.body.polygon,
    direction:req.body.direction,
    distance: req.body.distance,
    duration: req.body.duration
  })
  .then(result => {
    res.send(result)
    // console.log(result[0]);
  })
  .catch(next);
  // res.sendStatus(200)
});


module.exports = router
