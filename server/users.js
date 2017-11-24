const db = require('../db'); //this is required
const User = require('../db/models/user');
const userTrip = require('./userTrip');
// const flash = require('connect-flash');

const userRouter = require('express').Router();

const cookieSession = require('cookie-session')
const bcrypt = require('bcrypt');


// set up the cookie name as "user_id"
userRouter.use(cookieSession({
  name: 'session',
  keys: ["user_id"]
}));
// const tripRouter = express.Router({mergeParams: true});

// userRouter.use('/:user_id/trip', tripRouter);

userRouter.use('/:user_id/trip', userTrip);

// userRouter.use(flash());

userRouter.post('/login', function(req, res, next) {
  // console.log(req.body.password);
  const password = req.body.password
  User.findOne({
        where: {email:req.body.email}
      })
    .then(result => {
      if(result){
        // console.log(result.password)
        if(bcrypt.compareSync(password,result.password)){
          req.session.user_id=result.id;
          console.log(result)
          res.status(200).send(result);
        }else{
          res.status(200).send(null);
        }
        
      }else{
        res.status(200).send(null);
      }
      // console.log(result)
        // res.status(200).send(result);
    })
    .catch(next);
});

userRouter.post('/', function(req, res, next) {

  const email = req.body.email;
  console.log(email)

  User.findOne({
        where: {email:req.body.email}
      })
      .then(result => {
        if(result){
          res.status(200).send(null);
          console.log(result)
        }else{
          console.log(result)
          console.log(req.body)
          const passwordDigest = req.body.password;
          User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: bcrypt.hashSync(passwordDigest,10),
            email: email,
            picture: req.body.picture,
            drivers_license: req.body.drivers_license,
            about: req.body.about
          })
          .then(user => { 
            // req.session.user_id=user.id;
            // req.flash('success', {msg: 'Sign Up Success'})
            console.log(user.id);
            res.status(200).send("Sign Up");
          })
          .catch(next);
        }
    // res.status(200).send(result);
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



module.exports = userRouter
