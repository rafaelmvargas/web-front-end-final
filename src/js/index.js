import { clickHandler } from "/js/modules/clickHandler.mjs";
import { fetchPokemonData, setupPokeDex } from "/js/modules/pokedex.mjs";
import { applyPokeGrid } from "/js/modules/pokeGrid.mjs";

// Add clickhandler to the page
document.addEventListener("click", clickHandler);

if (true) {
  const pageKind = document.querySelector("body");
  if (pageKind.className === "home") {
    applyPokeGrid(pageKind);
    setupPokeDex();
  }
}
