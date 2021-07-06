import { PokemonAPI } from "./api.mjs";

function showPokeDetails(pokemon) {
  var pokemonModal = document.querySelector(".pokemon-modal");

  let getData = fetch(PokemonAPI + pokemon)
    .then((response) => response.json())
    .then((monster) => {
      return console.log(`<div class="pokemon-details-image"><img src='${monster.sprites.other["official-artwork"].front_default}'>}</div>
    <div class="pokemon-details-name">${monster.name}</div>
    <div class="pokemon-details-type">${monster.types[0]}<div>
    </div>
    <div class="pokemon-details-abilities"></div>`);
    });
}

export { showPokeDetails };
