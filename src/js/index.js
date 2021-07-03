console.log('hello world!')

//

function clickHandler(event) {
  console.log(event.target())
}

// Add clickhandler to the page

document.querySelector('body').addEventListener('click', clickHandler(event))
