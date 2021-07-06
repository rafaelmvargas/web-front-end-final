import { CatalogAPI, PokemonAPI } from "./api.mjs";

function setupPokeDex() {
  let pokeStore = window.localStorage;

  if (pokeStore.getItem("pokedex") === null || undefined) {
    console.log("Creating LocalStorage PokeDex");
    fetch(CatalogAPI)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        return pokeStore.setItem("pokedex", JSON.stringify(data));
      });
  } else {
    console.log("pokedex found");
    makePokemonTable();
  }
}

function getPokedex() {
  let pokedex = JSON.parse(localStorage.getItem("pokedex"));
  return pokedex;
}

function makePokemonTable() {
  let pokedex = getPokedex();
  var pokemonSummary = document.querySelector(".pokemonSummary");

  let done = pokedex.results.map(function renderDivs(pokemon) {
    let info = fetchPokemonData(pokemon.name);
    return info;
  });

  Promise.all(done).then((values) => {
    for (const [item, monster] of values.entries()) {
      pokemonSummary.innerHTML += `<div class="pokemonCard" id="${monster.name}">
      <img src="${monster.imageUrl}" id="${monster.name}">
      <div class="monster-name"><a href="#" class="pokemon" id="${monster.name}">${monster.name}<div>
      </a>
       </div>`;
    }
  });
}

function fetchPokemonData(index) {
  let onePokemonAPI = PokemonAPI + `${index}/`;
  let returnCard = fetch(onePokemonAPI)
    .then((response) => response.json())
    .then((data) => {
      let newData = {
        name: data.name,
        types: data.types,
        moves: data.moves,
        abilities: data.abilities,
        imageUrl: data.sprites.other["official-artwork"].front_default,
      };
      return newData;
    });
  return returnCard;
}

export { fetchPokemonData, getPokedex, setupPokeDex };
