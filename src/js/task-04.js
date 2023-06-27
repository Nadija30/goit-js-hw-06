// div id="counter">
//       <button type="button" data-action="decrement">-1</button>
//       <span id="value">0</span>
//       <button type="button" data-action="increment">+1</button>


const counter = document.querySelector('#counter')
const buttonDec = document.querySelector('[data-action="decrement"]')
const buttonInc = document.querySelector('[data-action="increment"]')
const span = document.querySelector('#value')
//console.log(span.textContent)
buttonDec.addEventListener('click', onClickDecrement)
buttonInc.addEventListener('click', onClickIcrement)

let counterValue = 0;

function onClickDecrement(evt) {
    counterValue -= 1;
    span.textContent = `${counterValue}`;
//console.log(evt.currentTarget.value) 
}
function onClickIcrement(evt) {
    counterValue += 1;
    span.textContent = `${counterValue}`;
    //console.log(evt.currentTarget);
}
