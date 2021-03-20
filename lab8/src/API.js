import axios from "axios"
export default{
    getName: function(name){
        return axios.get('https://localhost:45030/people/'+ name)
    }
}