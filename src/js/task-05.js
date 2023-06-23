const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
//console.log(span.textContent)
//console.log(input)
input.addEventListener('input', onInputChange)
function onInputChange(evt) {
   span.textContent = evt.currentTarget.value
    console.log(evt.currentTarget.value)
    console.log( span.textContent)
}