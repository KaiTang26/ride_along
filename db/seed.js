const db = require('../db')

const seedProducts = () => db.Promise.map([
  {title: 'Hats',category: ['Clothes','Accessories'], current_price: 16, description: 'Fedora with a feather', availability: true, inventory: 100, promo_id: 1},
  {title: 'Ski Suits',category: ['Athletics', 'Clothes'], current_price: 11, description: 'Full body ski suit', availability: false, inventory: 5, promo_id: 1},
  {title: 'Fanny Pack',category: ['Accessories'], current_price: 12, description: 'Bright neon in all colors', availability: true, inventory: 64, promo_id: 1},
  {title: 'Chuck Taylors',category: ['Clothes','Shoes'], current_price: 15, description: 'A variation on a classsic', availability: false, inventory: 35},
  {title: 'Hairspray',category: ['Beauty'], current_price: 41, description: 'Full of CFCs', availability: true, inventory: 22, promo_id: 2},
  {title: 'Socks',category: ['Clothes'], current_price: 51, description: 'Big wooly socks', availability: true, inventory: 21},
  {title: 'Wigs', category: ['Accessories', 'Beauty'], current_price: 21, description: 'Business in the front, party in the back', availability: false, inventory: 100, promo_id: 2},
  {title: 'Chanel', category: ['Beauty'], current_price: 49, description: 'Chanel loose powder', availability: true, inventory: 100, promo_id: 2},
  {title: 'Cosmetics', category: ['Beauty'], current_price: 31, description: 'Revlon violet pink set', availability: true, inventory: 100, promo_id: 2},
  {title: 'Covergirl', category: ['Beauty'], current_price: 21, description: 'Cosmetics for the young generation', availability: false, inventory: 100, promo_id: 2},
  {title: 'Dior', category: ['Beauty'], current_price: 49, description: 'Luxury for your face', availability: true, inventory: 100, promo_id: 2},
  {title: 'Dolls', category: ['Accessories'], current_price: 9, description: 'For your room', availability: false, inventory: 100, promo_id: 2},
  {title: 'HighHeels', category: ['Shoes'], current_price: 27, description: 'Edge on your heel', availability: true, inventory: 100, promo_id: 2},
  {title: 'PinkSuit', category: ['Accessories', 'Clothes'], current_price: 22, description: 'Everything for your pink day', availability: false, inventory: 100, promo_id: 2},
  {title: 'Technicolor', category: ['Accessories', 'Clothes'], current_price: 31, description: 'Freedom', availability: false, inventory: 100, promo_id: 2},
  {title: 'Sneakers', category: ['Shoes', 'Athletics'], current_price: 62, description: 'Comply with your style', availability: false, inventory: 100, promo_id: 2},
  {title: 'FlyWatch', category: ['Accessories'], current_price: 20, description: 'What time is it now? 19: 08 ! ', availability: false, inventory: 100, promo_id: 2},
  {title: 'ThatWig', category: ['Accessories', 'Beauty'], current_price: 21, description: 'Party people', availability: false, inventory: 100, promo_id: 1},
  {title: 'Training set', category: ['Athletics', 'Clothes'], current_price: 21, description: 'Lion look', availability: false, inventory: 100, promo_id: 1},
  {title: 'Training suit for couple', category: ['Athletics', 'Clothes'], current_price: 21, description: 'Lion look', availability: false, inventory: 100, promo_id: 1},
], product => db.model('products').create(product));

const seedReviews = () => db.Promise.map([
 {rating: 1, review_text: "awful",product_id:5},
 {rating: 1, review_text: "if you have too much extra money ",product_id:1},
 {rating: 5, review_text: "the best!",product_id:2},
 {rating: 2, review_text: "waste of money",product_id:3},
 {rating: 3, review_text: "can be better",product_id:4},
 {rating: 3, review_text: "should be better",product_id:6},
 {rating: 4, review_text: "good price",product_id:7},
 {rating: 4, review_text: "just like description",product_id:1}
 ], review => db.model('reviews').create(review));


const seedUsers = () => db.Promise.map([
  {first_name: "Bill", last_name:"Murray", email: "bill@billmurray.com", about:"I'm Bill and I love company on long drives."},
  {first_name: "Ben", last_name:"Folds", email: "ben@folds.com"},
  {first_name: "Sara", last_name:"Zoo", email: "zoo@sara.com"}
], user => db.model('users').create(user));

const seedTrips = () => db.Promise.map([
  {date: '2017-12-11', time: `22:47:21 GMT`, start_location: "Toronto", end_location: "Ottawa", passengers: 4, origin:[43.761539,-79.411079], destination:[45.420315,-75.695419] , price:30.30, description:'Great trip pls join us', driver:1},
  {date: '2017-12-31', time: `09:00:21 GMT`, start_location: "Montreal", end_location: "Hamilton", passengers: 2, origin:[45.5017,-73.5673], destination:[43.255203,-79.843826] , price:55.30, description:'good trip pls join us', driver:2},
  {date: '2017-12-22', time: `18:45:21 GMT`, start_location: "Kingston", end_location: "Toronto", passengers: 3, origin:[44.22914,-76.48079], destination:[43.761539,-79.411079] , price:25.30, description:'good trip pls join us', driver:1}
], trip => db.model('trips').create(trip));


 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedProducts)
   .then(products => console.log(`Seeded ${products.length} products OK`))
   .then(seedReviews)
   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
   .then(seedUsers)
   .then(users => console.log(`Seeded ${users.length} users OK`))
   .then(seedTrips)
   .then(trips => console.log(`Seeded ${trips.length} trips OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
