"use strict"

// Завдання з уроку:
// Задача №1
// Отримати в константу елемент <body>

// const bodyElement = document.body
// console.log(bodyElement)

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
// const body = document.body
// const someLi = document.createElement('li')
// let newObject = document.createElement('UL')
// body.prepend(newObject)



const body = document.body;
let newObject = document.createElement('ul');
body.prepend(newObject);

function addListItems(x = 0) {
    for (let i = 1; i <= x; ++i) {
        let someLi = document.createElement('li');
        newObject.prepend(someLi);
    }
}

addListItems(5);





// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

const tagBody = document.body
body.classList.add('loaded')

if (body.classList.contains('loaded')) {
    body.style.color = 'green'
}
else { body.style.color = 'blue' }



// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".




const items = document.querySelectorAll('.item');
for (let i = 0; i < items.length; ++i) {
    items[i].classList.add('active');
    items[i].textContent = `Element #${i + 1}`
}










// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки


const button = document.querySelector('.button')

function scrollToBlock(element) {
    element.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
    })
}
scrollToBlock(button)


// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector('.link')
link.setAttribute('data-speed', '100')
link.getAttribute('speed')
let speed = link.getAttribute('speed')
if (speed < 200) (link.style.color = 'yellow')


// Завдання від мене:
// 1. Отримайте всі дочірні елементи тегу body, перевірте чи має наступний елемент після того який перевіряється клас 'next-element', якщо наступний елемент має клас 'next-element' пофарбуйте його в червоний колір.

const bodyElement = document.body
const childNodes = bodyElement.children
const nextElement = document.querySelector('.next-element');
for (let i = 0; i < childNodes.length; ++i) {
    if (nextElement.classList.contains('next-element')) {
        nextElement.style.color = 'red'
    }

}



// 2. Дано в html ul список з класом 'list', отримайте всі його дочірні пункти li і перевірте чи текст всередині пункту містить підрядок 'підрядок', якщо містить перезапишіть текст в цьому пункті на 'текст перезаписано' і пофарбуйте його в червоний колір.
const list = document.querySelector('.list')
const li = document.querySelectorAll('li')

for (let i = 0; i < li.length; ++i) {
    if (li[i].textContent.includes('підрядок')) {
        li[i].textContent = "текст перезаписано";
        li[i].style.color = 'red'
    }
}







// 3. Додайте клас ".active-list__item--active" до всіх елементів з класом ".active-list__item" які мають атрибут "data-active" зі значенням "true" які знаходяться всередині елементів з класом ".active-list", стилізуйте по цьому новому доданому класу якось цей елемент (без різниці як стилізувати але із JS стилі мають бути для практики).
const divElement = document.querySelectorAll('.active-list .active-list__item')

divElement.forEach(item => {
    if (item.dataset.active) {
        item.classList.add('active-list__item--active')
    }
})


const newDivClass = document.querySelectorAll('.active-list__item--active')

newDivClass.forEach(item => {
    item.style.color = 'blue'; item.style.fontSize = '30px';
})






// 4. Виведіть в консоль ширину, висоту, позицію зліва та зверху від краю екрану кожного елемента з класом ".block".

const blocks = document.querySelectorAll('.block')
blocks.forEach(item => {
    console.log(item.getBoundingClientRect().top)
    console.log(item.getBoundingClientRect().left)
    console.log(item.offsetWidth)
    console.log(item.offsetHeight)

})










