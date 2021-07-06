import { showPokeDetails } from "./pokeDetails.mjs";

function clickHandler(event) {
  console.log(event.target);

  if (event.target.matches("#hamburger")) {
    showMenu();
  }

  if (event.target.matches(".pokemon")) {
    showPokeDetails(event.target.id);
  }
}

function showMenu() {
  document.querySelector("body").classList.toggle("show-navigation-bar");
}

export { clickHandler };
