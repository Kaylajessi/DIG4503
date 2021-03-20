import React, { useRef } from 'react';
import axios from "axios";
import Name from "./Name.js";
import API from './API.js';

function Search() {
         
  let name = useRef();
  let nameDetails = 0
  

    const handlesubmit= (e)=>{
        console.log("insidesubmit")
        e.proventDefault()
        API.getName(e.target.value)
           .then((response)=> {console.log(response)
            nameDetails=response.data;
         })
.catch(function (error){
    console.log(error);
});
    }
    
    return(
        <div>
        <form onSubmit = {handlesubmit}>
            <input type="text" ref={name} placeholder = "name" />
            <button type="submit">Submit</button>
        </form>
           <Name data={nameDetails} />         
        </div>
      )
    }
  

  export default Search;

