const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',

   // Напиши скрипт, который для каждого элемента массива ingredients:
].map(ingredient => {

  // Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
  const li = document.createElement('li');

  // Добавит название ингредиента как его текстовое содержимое.
  // Добавит элементу класс item.
  li.textContent = ingredient;
  li.class = 'item';
  return li;
});
  
  // После чего вставит все <li> за одну операцию в список ul#ingredients.
  const ul = document.getElementById('ingredients');
  console.log(ingredients);
  ul.prepend(...ingredients);
