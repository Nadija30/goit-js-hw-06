const input = document.querySelector('#font-size-control')
input.addEventListener('input', onInput)
const span = document.querySelector('#text')
console.dir(span.textContent)

function onInput(evt) {
    console.log(evt.currentTarget.value)
}