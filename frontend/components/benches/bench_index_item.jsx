import React from 'react';
import { values } from 'lodash';

const BenchIndexItem = ({ benches }) => {
  let benchArray = [];
  Object.keys(benches).forEach( (benchId) => {
    benchArray.push(benches[benchId]);
  })

  return(
    <ul>
      {benchArray.map( (bench, idx) => (
        <li key={idx}>{bench.description}</li>
      ))}
    </ul>
  );

}

export default BenchIndexItem;




export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
	const foundItem = pokemonDetail.items.find(item => item.id === itemId);
	return foundItem || {};
}

export const selectAllPokemon = ({ pokemon }) => values(pokemon);
