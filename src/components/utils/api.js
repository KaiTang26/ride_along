import axios from 'axios';

export default {
    fetchExpressTest: function(){
        const encodedURI = window.encodeURI(`http://localhost:3000/api/express-test`);
         return axios.get(encodedURI)
            .then((response)=>{
                return response;
            })
    },

    postTrip: function(user_id, req){
      const encodedURI = window.encodeURI("http://localhost:3000/api/users/"+user_id+"/trip");
      console.log(encodedURI)
      return axios.post(encodedURI, req)
      .then((response)=> {
          return response;
      })
    },

    postReview: function(trip_id, user_id, req){
      const encodedURI = window.encodeURI(`http://localhost:3000/api/reviews/${trip_id}/${user_id}`);
      console.log(encodedURI)
      return axios.post(encodedURI, req)
      .then((response)=> {
        console.log('review posted');
      })
    },

    getReviews: function(user_id, req){
      const encodedURI = window.encodeURI("http://localhost:3000/api/users/"+user_id+"/reviews");
      console.log(encodedURI)
      return axios.get(encodedURI, req)
      .then((response)=> {
        console.log('reviews found');
        return response.data.user_trips;
      })
    },

// This links to a query that doesn't work yet
    averageRating: function(user_id, req){
      const encodedURI = window.encodeURI("http://localhost:3000/api/users/"+user_id+"/rating");
      console.log(encodedURI)
      return axios.get(encodedURI, req)
      .then((response)=> {
        console.log('average found');
        return response
      })
    },

    fetchGeocode: function(address){
      const encodedURI = window.encodeURI("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyAOdJrxTyFGID_cQFGUdskPi77ZQqKxy3c&v");
      return axios.get(encodedURI)
      .then((response)=>{
          return response.data.results[0].geometry.location

      })
    },

    getRides: function(){
      const encodedURI = window.encodeURI('http://localhost:3000/api/trips');
      return axios.get(encodedURI)
      .then((response) =>{
          return response
      })
    },

    getRide: function(trip_id, req){
      const encodedURI = window.encodeURI(`http://localhost:3000/api/trips/${trip_id}`);
      return axios.get(encodedURI)
      .then((response) =>{
          return response
      })
    },

    filterRides: function() {
      const encodedURI = window.encodeURI('http://localhost:3000/api/trips');
      return axios.get(encodedURI)
      .then((response) =>{
        return response
      })
    },

    register: function(req){
        const encodedURI = window.encodeURI("http://localhost:3000/api/users");
        console.log(req);
        console.log(encodedURI);
        return axios.post(encodedURI, req)
        .then((response)=> {
            console.log(response.data)
            return response;
        })
    },

    getUsers: function(){
        const encodedURI = window.encodeURI("http://localhost:3000/api/users/");
        return axios.get(encodedURI)
        .then(response => {
            return response;
        })
    },

    userInfo: function(user_id){
        const encodedURI = window.encodeURI("http://localhost:3000/api/users/"+user_id);
        return axios.get(encodedURI)
        .then(response => {
            return response;
        })
    },

    login: function(req){
        const encodedURI = window.encodeURI("http://localhost:3000/api/users/login");
        return axios.post(encodedURI, req)
        .then((response) => {
            // console.log("hello",response)
            return response
        })
    },
    userTrips: function(user_id){
        const encodedURI = window.encodeURI(`http://localhost:3000/api/users/${user_id}/trips`);
        return axios.get(encodedURI)
        .then(response => {
            return response;
        })
    },

    updateUserInfo: function(user_id, req){
        const encodedURI = window.encodeURI("http://localhost:3000/api/users/"+user_id);
        return axios.put(encodedURI, req)
        .then(response => {
            console.log("User info updated ", response);
        })
    },

    addCondition: function(trip_id, req) {
        const encodedURI = window.encodeURI        ("http://localhost:3000/api/agreements/ride/"+trip_id);
        return axios.post(encodedURI, req);
    },

    editCondition: function(trip_id, id, req) {
        const encodedURI = window.encodeURI        ("http://localhost:3000/api/agreements/ride/"+trip_id+"/"+id);
        return axios.put(encodedURI, req);
    },

    deleteCondition: function(trip_id, id, req) {
        const encodedURI = window.encodeURI        ("http://localhost:3000/api/agreements/ride/"+trip_id+"/"+id);
        return axios.delete(encodedURI, req);
    },

    findPassengerAgreement: function(trip_id, agreement_id, user_id) {
        const encodedURI = window.encodeURI        ("http://localhost:3000/api/agreements/"+trip_id+"/"+agreement_id+"/"+user_id);
        return axios.get(encodedURI)
        .then(response => {
            console.log("User info found ", response);
        })
    },

    passengerAgree: function(trip_id, agreement_id, user_id, boolean, req) {
        const encodedURI = window.encodeURI        ("http://localhost:3000/api/agreements/"+trip_id+"/"+agreement_id+"/"+user_id+"/"+boolean);
        return axios.put(encodedURI, req);
    },

    postJoin: function(user_id, req){
        const encodedURI = window.encodeURI("http://localhost:3000/api/users/"+user_id+"/trip/join");
        console.log(encodedURI)
        return axios.post(encodedURI, req)
        .then((response)=> {
            return response;
        })
      },

    fetchJoin: function(trip_id){
        const encodedURI = window.encodeURI("http://localhost:3000/api/join/"+trip_id)
        return axios.get(encodedURI)
        .then((res)=>{
            return res
        })
    }
      
}
