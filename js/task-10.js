// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  let width = 20;
  let height = 20;
  for (let i = 1; i <= input.value; i += 1) {
    width += 10;
    height += 10;
    const box = document.createElement('div');
    box.setAttribute('style', `background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px`);
    boxes.append(box);
  }
})

destroyButton.addEventListener('click', () => {
    boxes.innerHTML = "";
})