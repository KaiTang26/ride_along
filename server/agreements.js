const db = require('../db') //this is required
const Agreement = require('../db/models/agreement');
const Agreement_User = require('../db/models/agreement_user');
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
    console.log(`Delete successful? 1 means yes, 0 means no: ${deleted}`);
  })
  .catch(next);
})

// Passengers agree to a Condition

// remember to use transaction as you are not sure
// whether user is already present in DB or not (and you might end up creating the user - a write operation on DB)
// router.put('/:id/:agreementId/:userId/:boolean', function(req,res,next) { 
//   Agreement_User.findOrCreate({
//     where: {
//     trip_id: req.params.id,
//     agreement_id: req.params.agreementId,
//     user_id: req.params.userId,
//     agree: req.params.boolean
//     }
//   })
//   // necessary to use spread to find out if user was found or created
//   .spread((user, created) => {
//     // this userId was either created or found depending upon whether the argment 'created' is true or false
//     // do something with this user now
//     if (created) {
//       condition => {
//         console.log(condition)
//         condition.updateAttributes({
//           agree: req.params.boolean
//         })
//       }
//     } else {
//       agree: req.params.boolean
//     }
//   })
//   .then(result =>
//     console.log("it worked", result)
//   )
//   .catch(next);
// })
    // router.put('/:id/:agreementId/:userId/:boolean', function(req,res,next) { 
    //   Agreement_User.findOne({
    //     where: {
    //     trip_id: req.params.id,
    //     agreement_id: req.params.agreementId,
    //     user_id: req.params.userId
    //     }
    //   })
    //   .then(found => {
    //     if (found) {
    //       found => {
    //         console.log("FOUND", found)
    //         found.updateAttributes({
    //           agree: req.params.boolean
    //         });
    //       }
    //     } else {
    //       Agreement_User.create({
    //         trip_id: req.params.id,
    //         agreement_id: req.params.agreementId,
    //         user_id: req.params.userId,
    //         agree: req.params.boolean
    //       })
    //     }
    //   })
    //   .then(result =>
    //     console.log("it worked", result)
    //   )
    //   .catch(next);
    // })
router.put('/:id/:agreementId/:userId/:boolean', function(req,res,next) { 
  Agreement_User.findOne({
    where: {
    trip_id: req.params.id,
    agreement_id: req.params.agreementId,
    user_id: req.params.userId}
  }).
  then(result => {
    console.log("FINDONE", result)
    if (result === null) {
      Agreement_User.create({
        trip_id: req.params.id,
        agreement_id: req.params.agreementId,
        user_id: req.params.userId,
        agree: req.params.boolean
      })
    } else {
      Agreement_User.update({agree: req.params.boolean}, {where: { trip_id: req.params.id,
          agreement_id: req.params.agreementId,
          user_id: req.params.userId } })  
      .then(updated => {
        console.log("HATA",updated)})
    }
  }).
  then(result => {
    console.log("FINDTWO", result)
  })
})


// router.get('/:id/:agreementId/:userId', function(req, res, next) {
//   Agreement_User.findOne({
//     where: {
//     trip_id: req.params.id,
//     agreement_id: req.params.agreementId,
//     user_id: req.params.userId
//     }
//     })
//     .then(result => {
//       res.status(200).send(result);
//       console.log("GET DATAVALUE",result.dataValues.agree)
//       return result.dataValues.agree
//     })
//     .catch(next);
// });

// // Passenger updates agreement to a Condition
// router.put('/:id/:agreementId/:userId', function(req,res,next) {
//   Agreement_User.findOne({
//     where: {
//     trip_id: req.params.id,
//     agreement_id: req.params.agreementId,
//     user_id: req.params.userId
//     }
//   })
//   .then(condition => {
//     condition.updateAttributes({
//       agree: req.body.checked
//     })
//   })
//   .then(console.log("it updated!"))
//   .catch(next);
// })


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
