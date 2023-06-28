
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
console.log(textColor)
button.addEventListener('click', onColor);
const body = document.body;

function onColor(evt) {
const color = getRandomHexColor();
textColor.textContent = color ;
body.style.backgroundColor = color ;

//textColor.textContent = body.style.backgroundColor = getRandomHexColor();
}

