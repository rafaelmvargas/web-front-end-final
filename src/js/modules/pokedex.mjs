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
  var pokemonSummary = document.querySelector(".pokemonSummary");

  let done = pokedex.results.map(function renderDivs(pokemon) {
    // Promises start!
    let info = fetchPokemonData(pokemon.name);
    // console.log(info, "Wassup");
    return info;
  });
  // .map(
  //   (pokemon) => {
  //   // info = fetchPokemonData(pokemon);
  //   }
  // )
  // .join("");
  let promiseCatch = Promise;
  const caught = promiseCatch.all(done).then((values) => {
    console.log(values, "fuck yeah");
    for (const [item, monster] of values.entries()) {
      pokemonSummary.innerHTML += `<div class="pokemon" id="${monster.name}"><a href="#" >
       <img src="${monster.imageUrl}">
       ${monster.name}
      </a></div>`;
    }
  });

  // console.log(pokedex.results.map((pokemon) => pokemon.name));
}

function fetchPokemonData(index) {
  let onePokemonAPI = PokemonAPI + `${index}/`;
  let returnCard = fetch(onePokemonAPI)
    .then((response) => response.json())
    .then((data) => {
      let newData = {
        // index: index,
        name: data.name,
        types: data.types,
        moves: data.moves,
        abilities: data.abilities,
        imageUrl: data.sprites.other["official-artwork"].front_default,
      };
      return newData;
    });

  // console.log(returnCard);
  return returnCard;
}

// pokemon.sprites.other["official-artwork"].front_default

// If not in local storage, get

// Store in localStorage

// get 251 pokemon

export { fetchPokemonData, getPokedex, setupPokeDex };
