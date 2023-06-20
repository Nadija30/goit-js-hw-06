const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
const li = document.createElement('li')
//console.log(li)
li.textContent = 'Potatoes';
//console.log(li)
li.classList.add('item')
console.log(li)
