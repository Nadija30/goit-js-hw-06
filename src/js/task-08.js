const formEl = document.querySelector('.login-form')
formEl.addEventListener('submit', onSubmit)
console.log(formEl.children)

function onSubmit(evt) {
    evt.preventDefault();
    //console.log(evt)
    const data = {
        email,
        password,
    }
    console.log(data)
    //const {email, password} = evt.currentTarget.element;
    //console.log(email)
    //console.log(password)
}
