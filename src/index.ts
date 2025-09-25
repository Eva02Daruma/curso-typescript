// import { getPokemon } from "./generics/get-pokemon";
// getPokemon(649)
//     .then(pokemon => console.log(pokemon.sprites.front_default))
//     .catch(error => console.error(error))
//     .finally(()=> console.log('fin de pokemon'))
// // console.log(getPokemon());

import { Pokemon } from "./decorators/pokemon-class";
const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'

// charmander.savePokemonToDB(1000);
charmander.publicApi = '';
console.log(charmander)