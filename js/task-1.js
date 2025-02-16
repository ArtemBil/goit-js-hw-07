const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories: ', categories.length);

Array.from(categories).forEach(category => {
   const categoryTitle = category.querySelector('h2');
   const categoryElements = category.querySelectorAll('li');

   console.log('Category: ', categoryTitle.textContent);
   console.log('Elements: ', categoryElements.length);
});

