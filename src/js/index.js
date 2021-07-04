console.log('hello world!')

//

function clickHandler(event) {
  console.log(event.target)
  event.preventDefault()

  if (event.target.matches('#hamburger')) {
    showMenu()
    // event.preventDefault()
  }
}

function showMenu() {
  document.querySelector('body').classList.toggle('show-navigation-bar')
}
// Add clickhandler to the page

document.addEventListener('click', clickHandler)
