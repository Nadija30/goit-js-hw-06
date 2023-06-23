const userName = document.querySelector('#validation-input')
console.log(userName.placeholder)
userName.addEventListener('change', onInput)

function onInput(evt){
console.log(evt.currentTarget)
}