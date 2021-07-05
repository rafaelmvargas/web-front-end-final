import { getPokedex } from "./pokedex.mjs";
import { fetchPokemonData } from "./pokedex.mjs";

function clickHandler(event) {
  console.log(event.target);
  event.preventDefault();

  if (event.target.matches("#hamburger")) {
    showMenu();
    // event.preventDefault()
  }


  if (event.target.matches('.pokemon')) {
    console.log(event.target.id)
  }
}

function showMenu() {
  document.querySelector("body").classList.toggle("show-navigation-bar");
}

export { clickHandler };
