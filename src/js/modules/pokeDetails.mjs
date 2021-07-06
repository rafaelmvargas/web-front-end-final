import { fetchPokemonData } from "./pokedex.mjs";

function showPokeDetails(pokemon) {
  var pokemonModal = document.querySelector(".pokemon-modal");
  let info = fetchPokemonData(pokemon.name);

  Promise.all(info).then((values) => {
    for (const [item, monster] of values.entries()) {
      pokemonSummary.innerHTML += `<div class="pokemonCard" id="${monster.name}">
      <img src="${monster.imageUrl}" id="${monster.name}">
      <div class="monster-name"><a href="#" class="pokemon" id="${monster.name}">${monster.name}<div>
      </a>
       </div>`;
    }

    /**
     * convert to unordered list
     */
  });
}

export { showPokeDetails };
