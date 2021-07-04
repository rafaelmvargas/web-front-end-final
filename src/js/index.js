console.log('hello world!')

//

function clickHandler(event) {
  console.log(event.target())
  event.preventDefault()
}

// Add clickhandler to the page

document.querySelector('body').addEventListener('click', clickHandler(event))
