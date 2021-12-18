var title = 'Привет мир!';
// var title_2 = 'Это мой второй заголовок';
var title_3 = 'Ещё одона переменная для заголовка';

// document.getElementById('title').innerHTML = title;

// $('#title').text(title).fadeOut(1000);
// $('.title_2').text(title_2);

// document.getElementsByClassName('title_2')[0].innerHTML = title_3
// console.log(document.getElementsByClassName('title_2'));

// document.getElementsByClassName('title_2')[0].style.color = 'red';
// document.getElementsByClassName('title_2')[2].style.backgroundColor = 'black';
// document.getElementsByClassName('title_2')[2].style.color = 'white';
// document.getElementsByClassName('title_2')[2].style.fontSize = '30px';



$('.block').css({
    'width': '50%',
    'margin': 'auto',
    'font-size': '25px'
});

// $('.title_2').each(function(){
//     $('.title_2').click(function (){
//         $(this).css({
//             'background':'black',
//             'color': 'white',
//             'padding':'20px',
//             'font-size':'25px',
//             'margin':'0px',
//         })
//     })
// });

$('.title_2').click(function () {
    $(this).css({
        'background': 'black',
        'color': 'white',
        'padding': '20px',
        'font-size': '25px',
        'margin': '0px',
    })
})
$('.block').click(function () {
    $('.title_2').css({
        'background': 'white',
        'color': 'black',
        'padding': '0px',
        'font-size': '1.5em',
        'margin': '20px 0',
    });
})


arrayNum = [1, 2, 3, 4, 5, 6,];
// console.log(arrayNum);
// var title_2 = document.getElementsByClassName('title_2');
// console.log(title_2);
// for (let i = 0; i < title_2.length; i++) {
//     title_2[i].style.color = 'red';    
// }

// function num(a, b) {
//     return a / b;
// }
// console.log(num(10, 2));

// var yu = document.getElementsByClassName('title_2');
// function addNum(a,b) {
//     result = a - b;
//     for (let i = 0; i < yu.length; i++) {
//         yu[i].innerHTML = result;       
//     }
// }

// addNum(100,3);

// --- Переменные в javaScript

// var borderTop = 1;
// let second = 2;
// const pi = 3.14;

// console.log(borderTop);

// --- Типы данных

let num = 2; //Числа
let name = "Валерий"; //Строка
let boolean = true; // Логический тип данных
let sim = Symbol();
null; //То чего в коде просто несуществует 
undefined; // То что созданно но ещё не имеет значения
let obj = {};

let person = {
    name: "Валерий",
    yrs: 40,
    gor: "Донецк"
}

// Обращаться к объекту можно двумя способами; через точку и через квадратные скобки
// console.log(person.yrs);
// console.log(person["gor"]);

// --- Простое общение с пользователем

// 1 console.log();
// 2 alert("Привет мир");
// 3 confirm("Вам нравится Js?");
// 4 prompt("Коротко о Js", "")

// typeof() определяет тип данных


// --- Операторы в JS

// Декремент ++ и Инкремент -- Префексная и Посвиксная

// let decr = 10,
//     incr = 10;
// console.log(decr++);
// console.log(incr--);

// Присвоение =
// Равно по значению ==
// Равно по типу данных ===

// Логический опиратор И &&, Или || 

// Практика 
// Модельное окно

// let popup_click = document.getElementById('popup-click'),
//     popup = document.getElementById('popup'),
//     popup_close = document.getElementById('popup-close');

//     popup_click.onclick = function () {
//         popup.classList.add('popup-active');
//         this.style.display = "none";  
//     }
//     popup_close.onclick = function () {
//         popup.classList.remove('popup-active');
//         popup_click.style.display = "block";
//     }


// Раскрывающие блоки

// let dropDownHeader = document.getElementsByClassName('drop-down-header');

// for (let i = 0; i < dropDownHeader.length; i++) {
//     dropDownHeader[i].addEventListener('click', function () {
//         this.classList.toggle('active');
//         let dropDownContent = this.nextElementSibling;
//         if (dropDownContent.style.maxHeight) {
//             dropDownContent.style.maxHeight = null;
//         } else {
//             dropDownContent.style.maxHeight = dropDownContent.scrollHeight + 'px';
//         }
//     });

// }

// Css preloader на странице
// let preloader = document.getElementById('preloader');
// window.onload = function () {
//     preloader.style.display = 'none';
// }

// ==============================================================
// let start = document.getElementById('start'),
//     budgetVal = document.getElementsByClassName('budget-value')[0],
//     daybudgetVal = document.getElementsByClassName('daybudget-value')[0],
//     levelVal = document.getElementsByClassName('level-value')[0],
//     expensesVal = document.getElementsByClassName('expenses-value')[0],
//     optionalexpensesVal = document.getElementsByClassName('optionalexpenses-value')[0],
//     incomeVal = document.getElementsByClassName('income-value')[0],
//     monthsavingsVal = document.getElementsByClassName('monthsavings-value')[0],
//     yearsavingsVal = document.getElementsByClassName('yearsavings-value')[0],
//     yearVal = document.getElementsByClassName('year-value')[0],
//     monthValue = document.getElementsByClassName('month-value')[0],
//     dayValue = document.getElementsByClassName('day-value')[0],
//     mainValue = document.getElementsByClassName('main-value')[0],
//     inputExpensesItem = document.getElementsByClassName('expenses-item'),
//     btnExpensesItem = document.querySelector('button.expenses-item-btn'),
//     btnCountBudget = document.querySelector('button.count-budget-btn'),
//     optionalExpensesBtn = document.querySelector('button.optionalexpenses-btn'),
//     mainSumBtn = document.querySelector('.main-sum-btn'),
//     optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
//     checkboxSavings = document.querySelector('input#savings'),
//     chooseSum = document.querySelector('input#sum'),
//     chooseIncome = document.querySelector('.choose-income'),
//     choosePercent = document.querySelector('input#percent'),
//     checkSavings = document.getElementById('savings'),
//     allButton = document.querySelectorAll('button');

//     console.log(allButton);

// let money, time;

// start.addEventListener('click', function() {
//     time = prompt('Введите дату в формате YYYY-MM-DD', '');
//     money = +prompt('Ваш бюджет на месяц?', '');

//     while (isNaN(money) || money == '' || money == null) {
//         money = +prompt('Ваш бюджет на месяц?', '');
//     }

//     appData.timeData = time;
//     appData.budget = money;
//     budgetVal.textContent = money.toFixed();
//     yearVal.value = new Date(Date.parse(time)).getFullYear();
//     monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
//     dayValue.value = new Date(Date.parse(time)).getDate();
//     this.classList.remove('btn_active');
//     // btnExpensesItem.classList.add('btn_active');
// });

// btnExpensesItem.addEventListener('click', function() {
//     let sum = 0;

//     for (let i = 0; i < inputExpensesItem.length; i++) {
//         let a = inputExpensesItem[i].value,
//             b = inputExpensesItem[++i].value;

//         if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && typeof (a) != '' && typeof (b) != '') {
//             console.log('Done');
//             appData.expenses[a] = b;
//             sum += +b;
//             appData.expensesSum = sum;
//         // this.classList.remove('btn_active');
//         // optionalExpensesBtn.classList.add('btn_active');
//         } else {
//             i--;
//             this.classList.add('btn_active');
//         }
//     }
//     expensesVal.textContent = sum;
// });

// optionalExpensesBtn.addEventListener('click', function() {  
//     for (let i = 0; i < optionalexpensesItem.length; i++) {
//         let opt = optionalexpensesItem[i].value;
//         appData.optionalExpenses[i] = opt;
//         optionalexpensesVal.textContent += appData.optionalExpenses[i] + ' ';
//     }
//     // this.classList.remove('btn_active');
//     // btnCountBudget.classList.add('btn_active');
// });

// btnCountBudget.addEventListener('click', function() {

//     if(appData.budget != undefined) {
//         appData.moneyPerDay = (money / 30).toFixed();
//         daybudgetVal.textContent = appData.moneyPerDay;
    
//         if (appData.moneyPerDay < 2000) {
//             levelVal.textContent = 'Ваш бюджет ниже среднего уровня';
//             appData.levelVals = levelVal.textContent;
//         } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 10000) {
//             levelVal.textContent = 'У вас средний бюджет';
//             appData.levelVals = levelVal.textContent;
//         } else if (appData.moneyPerDay > 2000) {
//             levelVal.textContent = 'У вас высокий бюджет';
//             appData.levelVals = levelVal.textContent;
//         }
//         this.classList.remove('btn_active');
//         chooseIncome.style.border = '2px solid red';
//     } else {
//         daybudgetVal.textContent = 'Начните расчет. Кликните по самой главной кнопке для запуска программы!';
//         start.classList.add('btn_active');
//         chooseIncome.style.border = 'none';
//     }
    
// });

// chooseIncome.addEventListener('input', function() {
//     this.style.border = 'none';
//     let item = chooseIncome.value;
//         appData.income = item.split(', ');
//         incomeVal.textContent = appData.income;
// });

// checkSavings.addEventListener('click', function() {
//     if(appData.savings == true) {
//        appData.savings = false;
//     } else {
//        appData.savings = true;
//     }
// });

// chooseSum.addEventListener('input', function() {
//     if(appData.savings == true) {
//         let sum = +chooseSum.value;
//         let percent = +choosePercent.value;
//         appData.montIncome = sum / 100 / 12 * percent;
//         appData.yearIncome = sum / 100 * percent;

//         monthsavingsVal.textContent = appData.montIncome.toFixed(1);
//         yearsavingsVal.textContent = appData.yearIncome.toFixed(1);
//     }
// });

// choosePercent.addEventListener('input', function() {
//     if(appData.savings == true) {
//         let sum = +chooseSum.value;
//          let percent = +choosePercent.value;
//         appData.montIncome = sum / 100 / 12 * percent;
//         appData.yearIncome = sum / 100 * percent;

//         monthsavingsVal.textContent = appData.montIncome.toFixed(1);
//         yearsavingsVal.textContent = appData.yearIncome.toFixed(1);
//     }
// });

// for (let i = 0; i < allButton.length; i++) {
//     allButton[i].addEventListener('click', function() {
//         if(appData.budget == undefined) {
//             // allButton[i].classList.toggle('llBtn_active');
//             start.classList.add('btn_active');
//         }
//     });
    
// }

// mainSumBtn.addEventListener('click', function() {
//     if(appData.savings == true) {
//         let mainSum = (appData.budget - appData.expensesSum) + appData.yearIncome;
//         mainValue.value = mainSum;
//         appData.mainSum = 'Сумма дохода с учетом обязательных рассходови с накоплениями: ' + mainSum;
//     } else {
//         let mainSum = appData.budget - appData.expensesSum;
//         mainValue.value = mainSum;
//         appData.mainSum = 'Сумма дохода с учетом обязательных рассходов: ' + mainSum;
//     }
// });

// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timeData: time,
//     savings: false,
// }
// ==================================================================

// -- Условия


// if (nums < 50) {
//     alert("Ваше число меньше 50");
// } else if (nums > 50 && nums < 100) {
//     alert("Ваше число между 50 и 100");
// } else {
//     alert("Ваше число больше 100");
// }

// Условия в виде тернарного оператора

// (nums == 50) ? console.log('Верно') : console.log('Неверно');

// switch (nums) {
//     case nums < 50:
//         alert("Ваше число меньше 50");
//         break;
//     case nums > 50:
//         console.log("Ваше число между 50 и 100");
//         break;
//     case nums > 100:
//         console.log("Ваше число больше 100");
//         break;
//     case 50:
//         console.log("Верно");
//         break;
// }

// -- Циклы

// let nums = prompt("Введите число", "");

// while
// do while
// for

// while (nums <= 10) {
//     console.log(nums);
//     nums++;
// }

// do {
//     console.log(nums);
//     nums++;
// } while (nums <= 10);

// for (let i = 1; i < 10; i++) {
//     console.log(i); 
// }

// -- Callback-функции

// function lernJs(lang, callback) {
//     console.log("Я учу " + lang);
//     callback();
// }

// function done() {
//     console.log("Я прошод третий урок");
// }
// lernJs("javaScript", done);


// --- Объекты

// let option = {
//     width: 1000,
//     height: 1000,
//     name: "test",
// }

// console.log(option.width);
// option.bool = true;
// option.color = {
//     1: 'red',
//     2: 'black',
//     3: 'blue'
// }

// console.log(option.color);
// delete option.bool;
// console.log(option);

// for (let key in option) {
//     console.log("Имя свойства " + key + " Имеет значение " + option[key]);
// }

// console.log(Object.keys(option).length);

//  --- Массивы и псевдомассивы

//let arr = [1, 2, 'three', 7, 9, 'ten']; // масив

// arr.push(20); // добавляет элемент в конец массива
// arr.unshift("Ноль"); // добавляет элемент в ночало массива
// arr.pop(); // удаляет элемент в конеце массива
// arr.shift();  // удаляет элемент в ночале массива


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// for (let key in arr) {
//    console.log(key);
// }

// for (let key of arr) {
//     console.log(key);
// }


// let text = prompt("", ""),
//     ins = [];

// ins = text.split(', ');
// console.log(ins);


// --- Динамическая типизация в JS

// В строку

// Важное что нужно понимать - всё что приходит к нам от пользователя(confirm, prompt, textarea, input) это всё строка
// 1) Устарелый перевод в строку с помощью команды String();
// 2) Если что то конкатинируется со стракой, то автоматически становится стракой console.log(typeof('ghbdtn' + 3));

// В число

// 1) Метод Number console.log(typeof(Number("sdg" + "sdg")));
// 2) Приобразование в число с помощью унарного плюса console.log(typeof(+"sdg" + + "sdg"));
// Например унарный плюс можно поставить перед +prompt, тогда все ответы от пользователя будут овтомотически превращаться в число
// 3) С помощью команды parseInt console.log(typeof(parseInt('15px', 10)));

// Булиновый тип данных, логический

// 1) Метод Boolean console.log(typeof(Boolean("sdg")));
// 2) С помощью двух восклицательных згаков !! console.log(typeof(!!"sdg"));
// 3) Важный момент - это нужно знать что такие значения как 0, "", null, undefined, NaN это всегда false

// ---  Получение элементов со страницы

// 1) document.getElementById('') поиск по id
// 2)  document.getElementsByTagName('')  поиск по тэгу
// 3) document.getElementsByClassName('') поиск по классу
// 4) document.querySelectorAll('') поиск по селектору. Ищет все селекторы, псевдомассив
// 5) document.querySelector('') поиск по селектору. Ищет первый элемент в документе

let preloader = document.getElementById('preloader'),
    cssloader = document.querySelector('.cssload-dots'),
    divTag = document.getElementsByTagName('div'),
    cssloads = document.querySelectorAll('.cssload-dot'),
    cssloadss = document.querySelector('.cssload-dot');
// console.log(preloader);
// console.log(cssload);
// console.log(cssload.closest('#preloader'));
// console.log(cssloadss);


// ---- Действия с элементами на странице

// 1) Управлять стилями в javaScript с помощью метода style
// cssloads[0].style.backgroundColor = 'blue'; Покрасить первый элемент
// Чтобы покрасить сразу все элемееты, нужно делать это через цикл for или forEach
// for (let i = 0; i < cssloads.length; i++) {
//     cssloads[i].style.backgroundColor = 'yellow';
    
// }

// cssloads.forEach(function (item){
//     item.style.boxShadow = '2px 2px 20px';
// });

// Создание и добавление элемента на страницу с помощью createElement
// let div = document.createElement('div'),
//     text = document.createTextNode('Тут был я!');
// Создание и добавление текста на страницу с помощью createTextNode, innerHTML, textContent

// div.classList.add('black'); // Добавление классов к элементу

//document.body.appendChild(div);// Добавляет элемент в конец. Добавлять нужно к родителю элемента
// preloader.appendChild(div);


// let div = document.createElement('div'),
//     text = document.createTextNode('Добавление текста на страницу');

//     div.classList.add('black');

//     div.innerHTML = 'Оп';
// for (let i = 0; i < cssloads.length; i++) {
//     cssloads[i].innerHTML = "&times";
//     cssloads[i].style.boxSizing = "border-box";
//     cssloads[i].style.textAlign = 'center';
//     cssloads[i].style.paddingTop = "10px";
// }
    // Добавляет элемент в ночало. Добавлять нужно к родителю элемента insertBefore(что вставить, перед чем вставить);
// cssloader.insertBefore(div, cssloads[4]);

// Удаление элемента на странице removeChild();
// document.body.removeChild(preloader);
// cssloader.removeChild(cssloads[4]);

// Замена одного элемента другим
// cssloader.replaceChild(div, cssloads[0]);
// console.log(cssloader);

// ---- События и их обработчики

//1) События с обработчиком в Html коде  <button onclick="alert('Нажали первую кнопку');">Кнопка1</button> 
// Такой метод старый и используется крайне редко с маленьким кодом


//2) Обработчик событий с использованием свойства DOM. Пишится такой код в скриптовом файле.
// Минус такого обработчика событий в том что он задаёт только одну кманду, каждая последующий обработчик будет перезаписывать старый

// let btn = document.querySelectorAll('button'),
//     newBtn = document.createElement('button'),
    // wrapBtn = document.querySelector('.wrapBtn'),
    // link = document.querySelector('.even img'),
    // links = document.querySelector('.even'),
    // events = document.querySelector('.events');

// btn[0].onclick = function() {
//     alert('Нажали первую кнопку на странице');
// }

// console.log(btn);
//3) Самый распространённый и удобный способ с использыванием функции btn.addEventListener('событие', обработчик событий);

// btn[0].addEventListener('click', function() {
//     this.textContent = "Новый текст для кнопки";
//     wrapBtn.appendChild(newBtn);
// });
// newBtn.addEventListener('click', function() {
//     this.textContent = "Текст у новой кнопки";
// });

// Применить обработчик для всего псевдомассива нужно через цикл forEach() или for

// btn.forEach(function(item) {
//     item.addEventListener('click', function() {
//         item.style.backgroundColor = 'red';
//     });
// });

// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener('click', function() {
//         this.style.backgroundColor = 'red';
//     });
// }
let block = document.createElement('div');
    
// link.addEventListener('mouseenter', function(event) {
//     event.preventDefault();
//     this.classList.add('class_img');
//     events.appendChild(block);
//     block.textContent = "Ваша фотография была скрыта";
//     block.classList.add('div_activ');
// });

// Получить данные элемента с которым мы взаимодействуем с помощью обьекта event
// btn[0].onclick = function(event) {
//     // alert(' Произошло событие ' + event.type + ' На элементе ' + event.target);
//     alert(event.target);
// }

// for (let i = 0; i < btn.length; i++) {

//     document.addEventListener('click', function(event) {
//         alert(event.pageX, event.pageY);
//         let targ = event.target;
//         targ.style.backgroundColor = 'blue';
//     });
    
// }

// ---- События на мобильных устройствах и основы регулярных выражений

// touchstart - событие срабатывает при касинии на элемент. Аналог click
// touckmove - событие, когда пользователь коснулсся к элементу и перемещает его. Когда мы нажали пальцем на экран и начинаем по нему водить
// touchend - событие когда пользователь уберает палец с экрана
// touchenter - событие когда палец заходит на какойто соседний элемент
// touchleave - событие антогонист touchenter, наоборот когда палец выходит с элемента
// touchcancel - событие возникает тогда когда точка соприкосновения больше не регистрируется на поверхности

// --------- Скрипты и время их выполнения. setTimeout и setInterval

// Задержка срабатывания функции setTimeout(func, delay);
// clearTimeout(); используется для того чтобы остановить setTimeout. Отменяет его действия
// setInterval выводит функцию через определённое время много раз

// setTimeout(func, 5000);
// function func() {
//     alert('Функция сработала через 5 сек');
// }

// Рикурсивный вызов setTimeout
// let foxTimer = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 3000);
// });

// let containe = document.querySelector('.container'),
//     containerWrap = document.querySelector('.container-wrap'),
//     blocket = document.querySelector('.blocket');

// function anime() {
//     let pos = 0;

//     let id = setInterval(box, 10);
//     function box() {
//         if (pos == 240) {
//             console.log('Всё, финиш!');
//             clearInterval(id);
//         } else {
//             pos++;
//             blocket.style.top = pos + "px";
//             blocket.style.left = pos + "px";
//         }
//     }
// }

// function myAnime() {
//     let post = 0;
//     let id = setInterval(boxes, 10);
// function boxes() {
//     if (post == 240) {
//         setInterval(id);
//     } else {
//         post++;
//         blocket.style.top = post + "px";
//         blocket.style.left = post + "px";
//     }
// }
// }
// blocket.addEventListener('click', myAnime);


// Дилигирование. Событие в этом случае навешивается родителю элементов, а проверяется дочерний элемент.
// preloader = document.getElementById('preloader'),
//     cssloader = document.querySelector('.cssload-dots');

    cssloader.addEventListener('click', function(event) {
        if (event.target && event.target.matches('div.first')) {
            console.log('Меткое попадание');
        }
    })

    // if (event.target && event.target.classList.contains('cssload-dot') можно заменить на 
    // if (event.target && event.target.matches('div.cssload-dot'); Ищем совпадение diva с классом cssload-dot

//     let wrapBtn = document.querySelector('.wrapBtn'),
//         btn = document.getElementsByTagName('button');

// wrapBtn.addEventListener('click', function(event) {
//     if (event.target && event.target.classList.contains('open')) {
//         event.target.style.backgroundColor = 'red';
//         alert("На странице произошло событие: " + event.type + " Кнопка сейчас покрасится в красный тцвет!");
//     }
// });
// console.log(wrapBtn);

// let text = document.querySelector('#text'),
//     textar = document.querySelector('#textar'),
//     butss = document.querySelector('input#but'),
//      blockElem = document.querySelector('.blockElem'),
//      spans = document.getElementsByTagName('span'),
//      oneString = document.querySelector('.oneString'),
//      twoString = document.querySelector('.twoString'),
//      wrapblockForm = document.querySelector('.wrapblockForm');

// setTimeout(wrapblockFormActive, 5000);

// function wrapblockFormActive() {
//     wrapblockForm.classList.add('wrapblockForm__active');
// }

     
// for (let I = 0; I < spans.length; I++) {
//     spans[I].style.fontWeight = '700';
    
// }
    
//     butss.addEventListener('click', function() {
//         let rez = text.value,
//             rezText = textar.value;
//         oneString.textContent = rez;
//         let ops = twoString.textContent = rezText;
//         let pro = prompt("Добавьте ещё что нибудь", "");
//         twoString.textContent = ops + "<br>" + pro;
//         alert(twoString.textContent);
//     });

// Табы на Js

let tabHeader = document.querySelector('.tab-header'),
    tabItem = document.querySelectorAll('.tab-item'),
    tabContent = document.querySelectorAll('.tab-content');

function hidetabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.add('tab-content__hide');
    }
}
hidetabContent(1);

function showtabContent(b) {
    if (tabContent[b].classList.contains('tab-content__hide')) {
        tabContent[b].classList.remove('tab-content__hide');
    }
}

tabHeader.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('tab-item')) {
        for (let i = 0; i < tabItem.length; i++) {
            if (target == tabItem[i]) {
                hidetabContent(0);
                showtabContent(i);
                break;
            }
        }
    }
});
let containe = document.querySelector('.container'),
    containerWrap = document.querySelector('.container-wrap'),
    blocket = document.querySelector('.blocket');

function blogRight() {
    let pos = 0;
    let id = setInterval(speed, 10);
    function speed() {
        if (pos == 940) {
            setInterval(id);
        } else {
            pos++;
            blocket.style.left = pos + "px";
        }
    }
}

blocket.addEventListener('click', blogRight);