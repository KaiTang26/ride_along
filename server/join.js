const db = require('../db') 
const UserTrip = require('../db/models/user_trip');
const Agreement = require('../db/models/agreement');
const Agreement_User = require('../db/models/agreement_user');
const User = require('../db/models/user');

const router = require('express').Router();
const cors = require('cors');


router.get('/:id',function(req, res, next) {
    UserTrip.findAll({
      where:{trip_id:req.params.id},
      include:[{
        model: User,
        attributes:['first_name']
      }]
    })
    .then(result => {

      const data ={
        userList: [],
        detial:[]
      }
      result.forEach((ele)=>{
        data.userList.push(ele.user_id),
        data.detial.push(ele)
      })
      res.status(200).send(data);
    })
    .catch(next);
});

module.exports = router
