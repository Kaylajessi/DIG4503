import React, { useState } from 'react';
import axios from "axios";
import Pokemon from "./Pokemon.js";

function Search() {
         
  let [pokemon, changePokemon] = useState(0);
  let pokemonDetails = 0
  

    const searchAPI= (e)=>{
        changePokemon(e.target.value)
        axios.get('https://pokeapi.co/api/v2/pokemon/'+ e.target.value)
        .then((response)=> {
            pokemonDetails=response.data;
         })
.catch(function (error){
    console.log(error);
});
    }
    
    return(
        <div>
        <input type="text" value={pokemon} onChange={e => searchAPI(e)} />
        {pokemonDetails.length > 0 
        ? <Pokemon data={pokemonDetails} />
        : <p>Not Found!</p>
        }         
        </div>
      )
    }
  

  export default Search;


