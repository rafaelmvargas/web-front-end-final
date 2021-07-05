import { clickHandler } from "/js/modules/clickHandler.mjs";
import { fetchPokemonData, setupPokeDex } from "/js/modules/pokedex.mjs";

// Add clickhandler to the page
document.addEventListener("click", clickHandler);

setupPokeDex();
fetchPokemonData(1);
console.log("---");
