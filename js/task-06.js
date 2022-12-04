// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const validatorInput = document.querySelector('#validation-input');
// console.log(validatorInput.dataset.length);

validatorInput.addEventListener('blur', () => {
    if (validatorInput.value.length == validatorInput.dataset.length) {
        validatorInput.className = '';
        validatorInput.classList.add('valid');
    }
    else {
        validatorInput.className = '';
        validatorInput.classList.add('invalid');
    }
});