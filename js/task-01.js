// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const categoriesChildren = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categoriesChildren.length}`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

const categoriesOfElements = array => {
    array.forEach((element) => console.log(`Category: ` + element.firstElementChild.textContent + `\nElements: ` + element.lastElementChild.children.length));
}

categoriesOfElements(categoriesChildren);