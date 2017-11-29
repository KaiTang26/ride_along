const db = require('../db')

const seedUsers = () => db.Promise.map([
  {first_name: "Bill", last_name:"Murray", email: "bill@billmurray.com", about:"I'm Bill and I love company on long drives.", picture: "Bill.jpg"},
  {first_name: "Ben", last_name:"Folds", email: "ben@folds.com", about:"My hobbies include driving", picture: "Bill.jpg"},
  {first_name: "Sara", last_name:"Zoo", email: "zoo@sara.com", about:"Sara here. I live to drive people places.",  picture: "bill_gb.jpg"},
  {first_name: "Raymond", last_name:"Stantz", email: "raymond@gmail.com", about:"My job is pretty boring so I like to travel whenever I can. My ideal passenger is quiet, polite and doesn’t talk about science or the supernatural. I get enough of that form the “scientists” I work with.", password: "$2a$10$OycYmMS1SyPHYKAOOhaQ5OMtvZ6lW0d1YggupsABcN.RI.8kkvCqO", drivers_license: "111",  picture: "raymond.jpg"},
  {first_name: "Peter", last_name:"Venkman", email: "peter@gmail.com", about:"Peter Venkman Ph.D. of parapsychology. Likes dogs,cats and good conversation. Dislikes ghosts, getting slimed, and driving alone. When I’m not chasing ghosts I like chasing long luxurious drives down the 401.", password: "$2a$10$B1t70OrcmkNqFViSLAeNc.sdEmtXmMqFSKA/3fvEiswKQSBdPXtYu", drivers_license: "111",  picture: "peter.jpg"},
  {first_name: "Janine", last_name:"Melnitz", email: "janine@gmail.com", about:"Hi I’m Ray! I am the CEO of a successful startup out of New York city. We deal mostly with advanced technology and the supernatural. I like to go on long trips and I’m also looking for someone to carpool with to work. Check out my trips if you’d like to take a rid in the Ecto-1!", password: "$2a$10$dViazNqPYQ/nXQH0dY1bwe/Ijj3bRnSRfLc2LJO4h04sjLApcTONi", drivers_license: "111",  picture: "janine.jpg"}
], user => db.model('users').create(user));

const seedTrips = () => db.Promise.map([
  {date: new Date(2017, 02, 25), time: `22:47:21 GMT`, start_location: "Toronto", end_location: "Ottawa", passengers: 4, origin:[43.653226, -79.3831843], destination:[45.4215296, -75.69719309999999] , price:30.30, description:'Great trip pls join us', driver:1,
  polygon:[ [43.653226, -79.3831843],
            [43.653226, -75.69719309999999],
            [45.4215296, -75.69719309999999],
            [45.4215296, -79.3831843] ],
            direction: 0, distance:'449 km', duration:'4 hours 18 mins'},
  {date: new Date(2017, 11, 22), time: `09:00:21 GMT`, start_location: "Montreal", end_location: "Hamilton", passengers: 2, origin:[45.5016889, -73.567256], destination:[43.2557206, -79.8711024] , price:55.30, description:'good trip pls join us', driver:2,
  polygon:[ [43.2557206, -79.8711024],
            [43.2557206, -73.567256],
            [45.5016889, -73.567256],
            [45.5016889, -79.8711024]],
            direction: 2, distance:'608 km', duration:'5 hours 48 mins'},
  {date: new Date(2017, 6, 04), time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Toronto", passengers: 3, origin:[44.2311717, -76.4859544], destination:[43.653226, -79.3831843] , price:25.30, description:'good trip pls join us', driver:1,
  polygon:[ [43.653226, -79.3831843],
            [43.653226, -76.4859544],
            [44.2311717, -76.4859544],
            [44.2311717, -79.3831843] ],
            direction: 2, distance:'265 km', duration:'2 hours 42 mins'},
  {date: new Date(2017, 6, 04), time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Toronto", passengers: 3, origin:[44.2311717, -76.4859544], destination:[43.653226, -79.3831843] , price:25.30, description:'good trip pls join us', driver:4,
  polygon:[ [43.653226, -79.3831843],
            [43.653226, -76.4859544],
            [44.2311717, -76.4859544],
            [44.2311717, -79.3831843] ],
            direction: 2, distance:'265 km', duration:'2 hours 42 mins'}
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
  {user_id: 5, trip_id: 1, start: "Toronto" , end: "Ottawa"},
  {user_id: 1, trip_id: 3, start: "Kingston", end: "Toronto"},
  {user_id: 6, trip_id: 4, start: "Kingston", end: "Toronto"},
  {user_id: 1, trip_id: 2, start: "Montreal", end: "Hamilton"},
  {user_id: 2, trip_id: 1, start: "Toronto", end: "Ottawa"},
  {user_id: 3, trip_id: 3, start: "Kingston", end: "Toronto"},
  {user_id: 4, trip_id: 1, start: "Toronto" , end: "Ottawa"},
  {user_id: 4, trip_id: 2, start: "Montreal", end: "Hamilton"},
  {user_id: 4, trip_id: 3, start: "Kingston", end: "Toronto"},
  {user_id: 4, trip_id: 4, start: "Kingston", end: "Toronto" }

], user_trip => db.model('user_trips').create(user_trip));
const seedAgreements = () => db.Promise.map([
  {statement: "No food or drinks in the car", trip_id:1}
], agreement => db.model('agreements').create(agreement));


 db.didSync
   .then(() => db.sync())
   .then(seedUsers)
   .then(users => console.log(`Seeded ${users.length} users OK`))
   .then(seedTrips)
   .then(trips => console.log(`Seeded ${trips.length} trips OK`))
   .then(seedUserTrips)
   .then(userTrip => console.log(`Seeded ${userTrip.length} trips OK`))
   .then(seedReviews)
   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
   .then(seedAgreements)
   .then(agreements => console.log(`Seeded ${agreements.length} agreements OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
