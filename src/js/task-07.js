const input = document.querySelector('#font-size-control')
input.addEventListener('input', onInput)
//console.log(input)
const span = document.querySelector('#text')
console.dir(span.textContent)

function onInput(evt) {
span.style.fontSize = evt.currentTarget.value + "px";

}