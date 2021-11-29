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



let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false
    }

    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != '' && typeof(b) != '') {
            console.log('Done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }

    appData.moneyPerDay = money/30;

    alert('Ваш бюджет на 1 день: ' + appData.moneyPerDay);

    if (appData.moneyPerDay < 2000) {
        console.log('Ваш бюджет ниже среднего уровня');
    } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 10000) {
        console.log('У вас средни бюджет');
    } else if (appData.moneyPerDay > 2000) {
        console.log('У вас высокий бюджет');
    }

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