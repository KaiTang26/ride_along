const db = require('../db')

const seedUsers = () => db.Promise.map([
  {first_name: "Bill", last_name:"Murray", email: "bill@billmurray.com", about:"I'm Bill and I love company on long drives."},
  {first_name: "Ben", last_name:"Folds", email: "ben@folds.com", about:"My hobbies include driving"},
  {first_name: "Sara", last_name:"Zoo", email: "zoo@sara.com", about:"Sara here. I live to drive people places."},
  {first_name: "Sebastian", last_name:"Namek", email: "seb.namek@gmail.com", about:"Admin account.", password: "$2a$10$peWZvceD9MBu6e.SpAww2.Hu/XvoLpp7AFfXj44SE9waYND0aPGpy", drivers_license: "111111111"}
], user => db.model('users').create(user));

const seedTrips = () => db.Promise.map([
  {date: new Date(2017, 02, 25), time: `22:47:21 GMT`, start_location: "Toronto", end_location: "Ottawa", passengers: 4, origin:[43.761539,-79.411079], destination:[45.420315,-75.695419] , price:30.30, description:'Great trip pls join us', driver:1},
  {date: new Date(2017, 11, 22), time: `09:00:21 GMT`, start_location: "Montreal", end_location: "Hamilton", passengers: 2, origin:[45.5017,-73.5673], destination:[43.255203,-79.843826] , price:55.30, description:'good trip pls join us', driver:2},
  {date: new Date(2017, 6, 04), time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Toronto", passengers: 3, origin:[44.22914,-76.48079], destination:[43.761539,-79.411079] , price:25.30, description:'good trip pls join us', driver:1},
  {date: new Date(2017, 6, 04), time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Toronto", passengers: 3, origin:[44.22914,-76.48079], destination:[43.761539,-79.411079] , price:25.30, description:'My test trip', driver:4},
], trip => db.model('trips').create(trip));

const seedReviews = () => db.Promise.map([
  {rating: 1, review_text: "Really rude, bad taste in music", trip_id:2, user_id: 1},
  {rating: 1, review_text: "Was late and dropped me off far from agreed point ", trip_id:1, user_id: 2},
  {rating: 5, review_text: "Amazing trip. Nice, funny and on time!", trip_id:2, user_id: 3},
  {rating: 2, review_text: "It was okay. Nothing special but good enough", trip_id:3, user_id: 4},
  {rating: 3, review_text: "Could have been better", trip_id:4, user_id: 1},
  {rating: 3, review_text: "Drove pretty slow", trip_id:4, user_id: 2},
  {rating: 4, review_text: "Nice guy and fair price for the ride", trip_id:4, user_id: 1},
  {rating: 4, review_text: "Had a great time with Bill", trip_id:1, user_id: 4}
], review => db.model('reviews').create(review));

const seedUserTrips = () => db.Promise.map([
  {user_id: 1, trip_id: 1},
  {user_id: 1, trip_id: 3},
  {user_id: 4, trip_id: 1},
  {user_id: 4, trip_id: 2},
  {user_id: 4, trip_id: 3},
  {user_id: 4, trip_id: 4}
], user_trip => db.model('user_trips').create(user_trip));


 db.didSync
   .then(() => db.sync())
   .then(seedUsers)
   .then(users => console.log(`Seeded ${users.length} users OK`))
   .then(seedTrips)
   .then(trips => console.log(`Seeded ${trips.length} trips OK`))
   .then(seedReviews)
   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
   .then(seedUserTrips)
   .then(userTrip => console.log(`Seeded ${userTrip.length} trips OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
