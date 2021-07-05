import { clickHandler } from "/js/modules/clickHandler.mjs";
import { keyboardHandler } from "/js/modules/keyboardHandler.mjs";
import { fetchPokemonData, setupPokeDex } from "/js/modules/pokedex.mjs";

// Add clickhandler to the page

document.addEventListener("click", clickHandler);
document.addEventListener("keypress", keyboardHandler);

setupPokeDex();
fetchPokemonData(1);
