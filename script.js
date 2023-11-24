// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const link = document.getElementById('super_link');
console.dir(link);



// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

// const link2 = document.querySelectorAll('.card-link');
// for (let i = 0; i < link2.length; i++) {
//     link2[i].textContent = 'ССЫЛКА';
// }
// console.dir(link2);



// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

// const link3 = document.querySelectorAll('.card-body .card-link');
// console.dir(link3);



// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

// const dataNumber = document.querySelector("[data-number='50']");
// console.dir(dataNumber);



// 5. Выведите содержимое тега title в консоль.

// const title = document.querySelector('title');
// const text = title.textContent;
// console.log(text);



// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

// const cardTitle = document.querySelector('.card-title');
// const parentCardTitle = cardTitle.parentElement;
// console.dir(parentCardTitle);



// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// const body = document.querySelector('.card');
// const newp = document.createElement('p');
// newp.textContent = 'Привет';
// body.insertBefore(newp, body.firstChild);
// console.dir(body);


// 8. Удалите тег h6 на странице.

// const h6 = document.querySelector('h6');
// h6.remove();