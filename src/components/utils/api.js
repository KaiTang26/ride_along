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
            console.log("saved successfully")
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
    }

}
