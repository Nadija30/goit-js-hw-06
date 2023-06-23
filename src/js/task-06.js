const input = document.querySelector('#validation-input')
console.log(input)
input.addEventListener('blur', onInput)

function onInput(evt) {
    if (evt.currentTarget.value.length === Number(input.getAttribute('data-length'))) {
        input.classList.remove('validation-input');
       input.classList.add('valid');
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}
// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });
// #validation-input {
//         border: 2px solid #bdbdbd;
//       }

//       #validation-input.valid {
//         border-color: #4caf50;
//       }

//       #validation-input.invalid {
//         border-color: #f44336;
//       }
// <input
//       type="text"
//       id="validation-input"
//       data-length="6"
//       placeholder="Please enter 6 symbols"
//     />