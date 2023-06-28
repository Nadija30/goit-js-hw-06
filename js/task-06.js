const input = document.querySelector('#validation-input')
console.log(input)
input.addEventListener('blur', onInput)

function onInput(evt) {
    if (evt.currentTarget.value.trim().length === Number(input.getAttribute('data-length'))){
        input.classList.remove('invalid');
       input.classList.add('valid');
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}
