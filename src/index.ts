import { getPokemon } from "./generics/get-pokemon";

getPokemon(649)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(error => console.error(error))
    .finally(()=> console.log('fin de pokemon'))

// console.log(getPokemon());