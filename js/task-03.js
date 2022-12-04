const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const gallery = document.querySelector('.gallery');

gallery.style.display = 'flex';
gallery.style.listStyle = 'none';
gallery.style.flexWrap = 'wrap';
gallery.style.gap = '50px';

const makeItemImg = (images, gallery) => {
  const makeStringAtr = images.map(({ url, alt }) => {
    const string = `<li><img class ="gallery__img" src="${url}" alt="${alt}" width = "630px" height = "375px"></li>`;
    return string;
  })
  gallery.insertAdjacentHTML('beforeend', makeStringAtr.join(' '));
}

makeItemImg(images, gallery);