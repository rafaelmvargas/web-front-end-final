const CatalogAPI = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`;
const PokemonAPI = `https://pokeapi.co/api/v2/pokemon/`;

// Check to see if data in local storage

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
    listPokemons();
  }
}

function getPokedex() {
  let pokedex = JSON.parse(localStorage.getItem("pokedex"));
  return pokedex;
}

function listPokemons() {
  let pokedex = JSON.parse(localStorage.getItem("pokedex"));

  document.querySelector(".pokemonSummary").innerHTML += pokedex.results
    .map(
      (pokemon) =>
        `<div><a href="#" class="pokemon" id="${pokemon.name}">${pokemon.name}</a></div><br>`
    )
    .join("");
  console.log(pokedex.results[3].name, "Hello World!!!!!");
  console.log(pokedex.results.map((pokemon) => `${pokemon.name}`));

  let test = {};
  test = fetchPokemonData(42);
  console.log(test);
}

function fetchPokemonData(index) {
  let onePokemonAPI = PokemonAPI + `${index}/`;
  let returnCard = {};

  returnCard = fetch(onePokemonAPI)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.sprites.other["official-artwork"]);

      return {
        index: index,
        name: data.name,
        types: data.types,
        moves: data.moves,
        abilities: data.abilities,
        height: 40,
        image: data.sprites.other["official-artwork"],
      };
    });

  return returnCard;
}

// pokemon.sprites.other["official-artwork"].front_default

// If not in local storage, get

// Store in localStorage

// get 251 pokemon

export { fetchPokemonData, getPokedex, setupPokeDex };
