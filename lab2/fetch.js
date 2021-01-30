import axios from "axios";
import chalk from "chalk";

class Fetch {

    constructor(pokemon, color){
      this.pokemon = pokemon;
      this.color = color;
    }
  
    fetch() {
         
        axios.get('https://pokeapi.co/api/v2/pokemon/'+ this.pokemon)
         .then((response)=> {
         const pokemonData = response.data;
         
       console.log(chalk.hex(this.color).bold("id " + pokemonData.id + " name " + pokemonData.name));
        }).catch(function (error){
        console.log(chalk.red("error!"));
});
    }
  }

  export default Fetch;


