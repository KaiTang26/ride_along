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
        const encodedURI = window.encodeURI(`http://localhost:3000/api/users/#{user_id}/trip`);
        return axios.post(encodedURI, req)
        .then((response)=> {
            console.log("saved successfully")
        })

    }

}
