const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
const elementsIngredients = ingredients.map(ingredient => {
const li = document.createElement('li');
li.textContent = ingredient;
li.classList.add('item');
return li;
})
//console.log(elementsIngredients)
list.append(...elementsIngredients)
console.log(list)
