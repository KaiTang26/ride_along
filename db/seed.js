const db = require('../db')


const seedUsers = () => db.Promise.map([
  {first_name: "Bill", last_name:"Murray", email: "bill@billmurray.com", about:"I'm Bill and I love company on long drives."},
  {first_name: "Ben", last_name:"Folds", email: "ben@folds.com"},
  {first_name: "Sara", last_name:"Zoo", email: "zoo@sara.com"}
], user => db.model('users').create(user));

const seedTrips = () => db.Promise.map([
  {date: new Date(2017, 02, 25), time: `22:47:21 GMT`, start_location: "Toronto", end_location: "Ottawa", passengers: 4},
  {date: new Date(2017, 11, 22), time: `09:00:21 GMT`, start_location: "Montreal", end_location: "Hamilton", passengers: 2},
  {date: new Date(2017, 6, 04), time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Toronto", passengers: 3},
  {date: new Date(2018, 0, 13), time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Montreal", passengers: 2},
  {date: new Date(2017, 11, 25), time: `18:45:21 GMT`, start_location: "London", end_location: "Hamiltion", passengers: 4},
  {date: new Date(2018, 02, 13), time: `18:45:21 GMT`, start_location: "Hamilton", end_location: "London", passengers: 1},
  {date: new Date(2017, 09, 05), time: `18:45:21 GMT`, start_location: "Waterloo", end_location: "Toronto", passengers: 5},
  {date: new Date(2017, 07, 13), time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Ottawa", passengers: 1}
], trip => db.model('trips').create(trip));

const seedReviews = () => db.Promise.map([
  {rating: 1, review_text: "Really rude, bad taste in music",trip_id:4},
  {rating: 1, review_text: "Was late and dropped me off far from agreed point ",trip_id:1},
  {rating: 5, review_text: "Amazing trip. Nice, funny and on time!",trip_id:2},
  {rating: 2, review_text: "It was okay. Nothing special but good enough",trip_id:3},
  {rating: 3, review_text: "Could have been better",trip_id:4},
  {rating: 3, review_text: "Drove pretty slow",trip_id:3},
  {rating: 4, review_text: "Nice guy and fair price for the ride",trip_id:1},
  {rating: 4, review_text: "Had a great time with Bill",trip_id:1}
], review => db.model('reviews').create(review));


 db.didSync
   .then(() => db.sync())
   .then(seedUsers)
   .then(users => console.log(`Seeded ${users.length} users OK`))
   .then(seedTrips)
   .then(trips => console.log(`Seeded ${trips.length} trips OK`))
   .then(seedReviews)
   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
