import { fetchPokemonData } from "./pokedex.mjs";

function clickHandler(event) {
  console.log(event.target.id);
  event.preventDefault();

  if (event.target.matches("#hamburger")) {
    showMenu();
    // event.preventDefault()
  }

  if (event.target.id) {
    let data = fetchPokemonData(event.target.id);
    let el = document.querySelector(".pokemon-data-name");
    el.innerText = data.name;
  }
}

function showMenu() {
  document.querySelector("body").classList.toggle("show-navigation-bar");
}

export { clickHandler };
