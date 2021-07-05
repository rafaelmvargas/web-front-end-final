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
    let el = document.querySelector(`#${event.target.id}`)
    let parentElement = el.parentElement
    let div = document.createElement('div')
    div.innerText = data.height
    parentElement.appendChild(div)
    // let el = document.querySelector("pokemon-data-height"); 
    // el.innerText += data.height;
  }
}

function showMenu() {
  document.querySelector("body").classList.toggle("show-navigation-bar");
}

export { clickHandler };
