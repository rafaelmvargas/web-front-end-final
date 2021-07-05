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

function listPokemons() {
  let pokedex = JSON.parse(localStorage.getItem("pokedex"));
  (document.querySelector("main").innerHTML = pokedex.results.map(
    (pokemon) =>
      `<div><a href="#" id=${pokemon.name}>${pokemon.name}</a></div><br>`
  )),
    console.log(pokedex.results[3].name, "Hello World!!!!!");
  console.log(pokedex.results.map((pokemon) => `${pokemon.name}<br>`));
  console.log(pokedex.results[1].name, "Hiiiii");
  console.log(pokedex.results[1].name, "Hiiiii");
}

function fetchPokemonData(index) {
  let onePokemonAPI = PokemonAPI + `${index}/`;

  fetch(onePokemonAPI)
    .then((response) => response.json())
    .then((pokemon) =>
      console.log(pokemon.sprites.other["official-artwork"].front_default)
    );

    return {"name":index, "height":"40"}
}

// pokemon.sprites.other["official-artwork"].front_default

// If not in local storage, get

// Store in localStorage

export { fetchPokemonData, setupPokeDex };
