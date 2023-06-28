const list = document.querySelector('#categories');
console.dir(`Number of categories: ${list.children.length}`);
const categories = document.querySelectorAll('.item');
//console.log(categories) 
const elementCategories = categories.forEach(categorie => {
    console.log(`Category : ${categorie.firstElementChild.textContent}`);
    console.log(` Elements : ${categorie.lastElementChild.children.length}`)
})

