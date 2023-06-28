const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
//console.log(span.textContent)
//console.log(input)
input.addEventListener('input', onInputChange)
function onInputChange(evt) {
    // if (evt.currentTarget.value.trim()) {
    //     span.textContent = evt.currentTarget.value.trim() || span.textContent === "Anonymous";  
    // } else {
    //     span.textContent = "Anonymous"
    // }
    span.textContent = evt.currentTarget.value.trim() || "Anonymous";
    console.log(evt.currentTarget.value)
    console.log(span.textContent)
}