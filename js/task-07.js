document.querySelector('body').style.backgroundColor = '#eaf1fad0';
const input = document.getElementById('font-size-control')
const span = document.getElementById('text')
span.style.fontSize = `${input.value}px`
const fontSizeControl = ({ currentTarget }) =>
  (span.style.fontSize = `${currentTarget.value}px`);

input.addEventListener('input', fontSizeControl);

// const fontSizeControl = ({ currentTarget }) =>
//   (span.style.fontSize = `${currentTarget.value}px`);

// input.addEventListener('input', fontSizeControl);


