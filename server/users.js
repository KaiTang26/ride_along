const db = require('../db'); //this is required
const User = require('../db/models/user');
const userTrip = require('./userTrip');
const userTripModel = require('../db/models/user_trip');
const trip = require('../db/models/trip');
const userRouter = require('express').Router();

// const tripRouter = express.Router({mergeParams: true});

// userRouter.use('/:user_id/trip', tripRouter);

userRouter.use('/:user_id/trip', userTrip);

userRouter.get('/', function(req, res, next) {
  User.findAll()
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

userRouter.post('/', function(req, res, next) {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    email: req.body.email,
    picture: req.body.picture,
    drivers_license: req.body.drivers_license,
    about: req.body.about
  })
  .then(user => {
    console.log(user);
  })
  .catch(next);
});

  // console.log(req.body)
    // .then(result => {
    //     res.status(200).send(result);
    // })
    // .catch(next);

userRouter.get('/:id', function(req, res, next) {
  User.findOne({
      where:{id:req.params.id}
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

userRouter.get('/:id/trips', function(req, res, next){
  User.findOne({
      where:{
        id:req.params.id
      },
      include: [
        {
          model: userTripModel,
          // where: { user_id: req.params.id },
          attributes:['trip_id'],
          include: {
            model: trip,
            attributes:['id','date','time','start_location','end_location','driver']
          }
        }
      ]
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
})



module.exports = userRouter
