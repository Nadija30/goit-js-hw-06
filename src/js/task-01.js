const list = document.querySelector('#categories');
console.dir(`Number of categories: ${[...list.children].length}`);
const title = document.querySelector('.item');
console.dir(`Category : ${title.firstElementChild.textContent}`)
console.dir(` Elements : ${[...title.lastElementChild.children].length}`)
