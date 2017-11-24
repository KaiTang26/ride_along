const db = require('../db')

const seedReviews = () => db.Promise.map([
 {rating: 1, review_text: "awful",trip_id:5},
 {rating: 1, review_text: "if you have too much extra money ",trip_id:1},
 {rating: 5, review_text: "the best!",trip_id:2},
 {rating: 2, review_text: "waste of money",trip_id:3},
 {rating: 3, review_text: "can be better",trip_id:4},
 {rating: 3, review_text: "should be better",trip_id:6},
 {rating: 4, review_text: "good price",trip_id:7},
 {rating: 4, review_text: "just like description",trip_id:1}
 ], review => db.model('reviews').create(review));


const seedUsers = () => db.Promise.map([
  {first_name: "Ben", last_name:"Folds", email: "ben@folds.com"},
  {first_name: "Sara", last_name:"Zoo", email: "zoo@sara.com"}
], user => db.model('users').create(user));

const seedTrips = () => db.Promise.map([
  {date: new Date(2017, 02, 25), time: `22:47:21 GMT`, start_location: "Toronto", end_location: "Ottawa", passengers: 4},
  {date: '2017-12-31', time: `09:00:21 GMT`, start_location: "Montreal", end_location: "Hamilton", passengers: 2},
  {date: '2017-12-22', time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Toronto", passengers: 3},
  {date: '2017-12-22', time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Montreal", passengers: 2},
  {date: '2017-12-22', time: `18:45:21 GMT`, start_location: "London", end_location: "Hamiltion", passengers: 4},
  {date: '2017-12-22', time: `18:45:21 GMT`, start_location: "Hamilton", end_location: "London", passengers: 1},
  {date: '2017-12-22', time: `18:45:21 GMT`, start_location: "Waterloo", end_location: "Toronto", passengers: 5},
  {date: '2017-12-22', time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Ottawa", passengers: 1}
], trip => db.model('trips').create(trip));


 db.didSync
   .then(() => db.sync())
   .then(seedReviews)
   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
   .then(seedUsers)
   .then(users => console.log(`Seeded ${users.length} users OK`))
   .then(seedTrips)
   .then(trips => console.log(`Seeded ${trips.length} trips OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
