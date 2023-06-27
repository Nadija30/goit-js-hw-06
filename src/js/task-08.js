const formEl = document.querySelector('.login-form')
formEl.addEventListener('submit', onSubmit)
//console.log(formEl.currentTarget)
const profile = {};
function onSubmit(evt) {
    evt.preventDefault();
    console.log(evt.currentTarget.elements.email)
    //const email = evt.currentTarget.elements.email;
    //const password = evt.currentTarget.elements.password;
    const {email, password} = evt.currentTarget.elements;
    if (email.value === "" || password === "") {
        alert('Please fill in all the fields!');
    } else {
        profile.email = email.value;
        profile.password = password.value;
        console.log(profile)
    }
    evt.currentTarget.reset();
   
}
