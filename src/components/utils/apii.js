import axios from 'axios';

export default {
    fetchExpressTest: function(){
        const encodedURI = window.encodeURI(`http://localhost:3000/api/express-test`);
         return axios.get(encodedURI)
            .then((response)=>{
                return response;
            })
    }

}
