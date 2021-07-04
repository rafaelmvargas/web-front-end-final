console.log('hello world!')

//

function clickHandler(event) {
  console.log(event.target)
  // event.preventDefault()

  if (event.target.matches('#hamburger')) {
    showMenu()
    // event.preventDefault()
  }
}

function keyboardHandler(KeyboardEvent) {
  console.log(KeyboardEvent)
}

function showMenu() {
  document.querySelector('body').classList.toggle('show-navigation-bar')
}
// Add clickhandler to the page

document.addEventListener('click', clickHandler)
document.addEventListener('keypress', keyboardHandler)
