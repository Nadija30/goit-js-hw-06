const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
//console.log(span.textContent)
//console.log(input)
input.addEventListener('input', onInputChange)
function onInputChange(evt) {
    if (evt.currentTarget.value) {
     span.textContent = evt.currentTarget.value   
    } else {
        span.textContent = "Anonymous"
    }
    console.log(evt.currentTarget.value)
    console.log(span.textContent)
}