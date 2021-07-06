const CatalogAPI = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251`;
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
    makePokemonTable();
  }
}

function getPokedex() {
  let pokedex = JSON.parse(localStorage.getItem("pokedex"));
  return pokedex;
}

function makePokemonTable() {
  let pokedex = getPokedex();

  let pokemonSummary = document.querySelector(".pokemonSummary").innerHTML;

  console.log(pokedex);

  pokemonSummary +=
  pokedex.results
    .map(function renderDivs(pokemon) {
      // console.log(pokemon, "hmm")
      let info = fetchPokemonData(pokemon.name);
      // console.log(info, "Wassup");

      return `<div class="pokemon" id="${info.name}"><a href="#" >
        <img src="${info.image}">
        ${info.name}
        </a></div><br>`;
    })
    // .map(
    //   (pokemon) => {
    //   // info = fetchPokemonData(pokemon);
    //   `<div class="pokemon" id="${pokemon.name}"><a href="#" >
    //     <img src="${pokemon.image}">
    //     ${pokemon.name}
    //     </a></div><br>`}
    // )
    .join("");
  console.log(pokedex.results.map((pokemon) => `${pokemon.name}`));

  let test = {};
  test = fetchPokemonData(42);
  console.log(test);
}

async function fetchPokemonData(index) {
  let onePokemonAPI = PokemonAPI + `${index}/`;
  let returnCard = await fetch(onePokemonAPI)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.sprites.other["official-artwork"]);

      let newData = {

        index: index,
        name: data.name,
        types: data.types,
        moves: data.moves,
        abilities: data.abilities,
        height: 40,
        image: data.sprites.other["official-artwork"],
      }
      console.log(newData)
      return newData;
    });

  return returnCard;
}

// pokemon.sprites.other["official-artwork"].front_default

// If not in local storage, get

// Store in localStorage

// get 251 pokemon

export { fetchPokemonData, getPokedex, setupPokeDex };
