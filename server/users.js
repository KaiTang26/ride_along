const db = require('../db') //this is required
const User = require('../db/models/user');

const router = require('express').Router()

// router.get('/', function(req, res, next) {
//   User.findAll()
//     .then(result => {
//         res.status(200).send(result);
//     })
//     .catch(next);
// });

router.post('/', function(req, res, next) {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    email: req.body.email,
    picture: req.body.picture,
    drivers_license: req.body.drivers_license
  })
  .then(user => { 
    console.log(user);
  })
  .save();

  // console.log(req.body)
    // .then(result => {
    //     res.status(200).send(result);
    // })
    // .catch(next);
});

router.get('/:id', function(req, res, next) {
  User.findOne({
      where:{id:req.params.id}
    })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});



module.exports = router
