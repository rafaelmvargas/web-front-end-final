import { clickHandler } from "/js/modules/clickHandler.mjs";
import { fetchPokemonData, setupPokeDex } from "/js/modules/pokedex.mjs";

// Add clickhandler to the page
document.addEventListener("click", clickHandler);

if ((document.querySelector("body").className === "home")) {
  setupPokeDex();
}
