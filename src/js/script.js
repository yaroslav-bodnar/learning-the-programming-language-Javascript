
console.log('==============ПРАКТИКА==============');




//_____________АЛГОРИТМ________________
//Задаем переменным имена и исходные значения
var time = 3;
var speedOfFirstCyclist = 12;
var speedOfSecondCyclist = 14;

//найти расстояние которое проехал 1-й 
var distanceOfFirstCyclist = speedOfFirstCyclist * time;

//найти расстояние которое проехал 2-й 
var distanceOfSecondCyclist = speedOfSecondCyclist * time;

//сложить полученые расстояния
var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;

console.log(totalDistance);




//ПРОСТОЙ АЛГОРИТМ
var firstChicken = 12;
var secondChicken = 15;
var totalChickenEggs = firstChicken + secondChicken;

console.log(totalChickenEggs);



























console.log ("======================Функция===============================");
//========================================================================= Функция ==========================================================================================
var timeMan = 3;
var firstMan = 5;
var secondMan = 10;

var calculateDistanceMan = function () {
	var distanceFirstMan = firstMan * timeMan;
	var distanceSecondMan = secondMan * timeMan;
	var totalDistanceMan = distanceFirstMan + distanceSecondMan;
	return totalDistanceMan;
};

console.log(calculateDistanceMan());


//====================================


var calculateDistanceWoman = function (timeWoman, firstWoman, secondWoman) {
	var distanceFirstWoman = firstWoman * timeWoman;
	var distanceSecondWoman = secondWoman * timeWoman;
	var totalDistanceWoman = distanceFirstWoman + distanceSecondWoman;
	return totalDistanceWoman;
};

console.log (calculateDistanceWoman(10, 12, 14));


var firstDistanceWoman = calculateDistanceWoman(5, 4, 8);
var secondDistanceWoman = calculateDistanceWoman(6, 4, 12);
console.log (firstDistanceWoman, secondDistanceWoman);


//====================================


//СОЗДАНИЕ ПРОСТОЙ ФУНКЦИИ РЕШЕНИЕ КОТОРОЙ ПРОХОДИТ С ПОМОЩЬЮ ЛОГИЧЕСКОГО ОПЕРАТОРА
//ЕСЛИ В КОМНАТЕ ГОРИТ СВЕТ - ВЫКЛЮЧИТЬ, А ЕСЛИ НЕ ГОРИТ - ВКЛЮЧИТЬ
var lightInTheRoom = function(light) {
	if (light) {
		return 'turn off';
	} else {
		return 'turn on';
	}
};

console.log(lightInTheRoom(true));
console.log(lightInTheRoom(false));


//====================================


//УПРОЩЕННЫЙ ВАРИАНТ РЕШЕНИЯ ТОЙ ЖЕ ЗАДАЧИ (ФУНКЦИИ) ТОЛЬКО С ИСПОЛЬЗОВАНИЕМ ТЕРНАРНОГО ОПЕРАТОРА
var lightInTheSecondRoom = function(light) {
	return light ? 'turn off' : 'turn on';
};

console.log(lightInTheSecondRoom(true));
console.log(lightInTheSecondRoom(false));


//====================================


//_________________ФУНКЦИЯ________________
//это возможность повторять один и тот же алгоритм несколько раз без необходимости повторения кода

//Задаем новые переменные для функции
var timeF = 5;
var speedOfFirstCyclistF = 14;
var speedOfSecondCyclistF = 18;

var calculateDistanceF = function() {
	var distanceOfFirstCyclistF = speedOfFirstCyclistF * timeF;
	var distanceOfSecondCyclistF = speedOfSecondCyclistF * timeF;
	var totalDistanceF = distanceOfFirstCyclistF + distanceOfSecondCyclistF;
	return totalDistanceF;
	//возвращает всей функции значение равно результату выполнения алгоритма
};
//запуск функции и ее вывод в консоль:
console.log(calculateDistanceF());



//======================================



//________________ФУНКЦИЯ С ПАРАМЕТРАМИ___________________
//Создание ФУНКЦИИ без переменных, а только с параметрами которые можно при необходимости менять
var calculateDistanceF2 = function(timeF2, speedOfFirstCyclistF2, speedOfSecondCyclistF2) {
	var distanceOfFirstCyclistF2 = speedOfFirstCyclistF2 * timeF2;
	var distanceOfSecondCyclistF2 = speedOfSecondCyclistF2 * timeF2;
	var totalDistanceF2 = distanceOfFirstCyclistF2 + distanceOfSecondCyclistF2;
	return totalDistanceF2;
};
//запуск функции:
console.log(calculateDistanceF2(24, 26, 32));


//======================================



//ПРОСТАЯ ФУНКЦИЯ
var firstThing = 'maybe ';
var secondThing  = 1;

var theFirst = function() {
	return totalThings = firstThing + secondThing;
};

console.log(theFirst());



//======================================



//ПРОСТАЯ ФУНКИЯ С ПРИМЕНЕНИЕМ ПАРАМЕТРОВ КОТОРЫЕ МОЖНО МЕНЯТЬ
var theSecond = function(goodSecondApple, badSecondApple) {
	return togetherApples = goodSecondApple + badSecondApple;
};

console.log(theSecond(2, 15));



//=====================================


//_________________________РЕШЕНИЕ СЛЕДУЮЮЩЕЙ ЗАДАЧИ___________________
//1. Взять любой предмет из раковины
//2. Помыть его и отложить в сторону
//3. Если в раковине еще что-то есть - повторить
var washNextItem = function(itemsLeft) {
	itemsLeft--;
	console.log('В раковине осталось ' + itemsLeft + ' предметов');

	if (itemsLeft > 0) {
		washNextItem(itemsLeft);
	// это действие когда функция повторяеться внутри функции называеться "рекурсия"
	}
};

washNextItem(10);






























//===========================================================================================================================================================
console.log('===============================ОПЕРАТОРЫ====================');

console.log(true ? "Больше" : "Меньше");
console.log(false ? "Больше" : "Меньше");



//=================================

//_________________ТЕРНАРНЫЙ ОПЕРАТОР______________
var buySomeBreadT = function(eggs) {
	return eggs ? 10 : 1;
};

console.log(buySomeBreadT(false));


//===================================

//для проверки типа значения можно использовать оператор "typeof"
console.log(typeof (1 + 2));
console.log(typeof ("строчный " + "тип данных"));
console.log(typeof ('stringJS' + 2));


//нахождение остатка от деления
console.log(10 % 3);
console.log(17 % 3);


//динамическое приведение типов
console.log('10' / 2);
console.log( '10' - 2);
console.log('10' + 2);





//явное приведение типов : строка к числу - метод 'parseInt'
console.log(parseInt('10') + 2);
console.log(parseInt('10', 10) + 2); //явно указываем систему счисления
console.log(parseInt('10', 20) + 2); //явно указываем систему счисления

//явное приведение типов : строка к дробному числу - метод 'parseFloat'
console.log(parseFloat('10.2') + 2);

//явное приведение типов : с помощью унарного оператора
console.log(+ "10.2");



//=================================



//ПРИВИДЕНИ ТИПОВ
console.log('=====================ПРИВИДЕНИЕ ТИПОВ================');
console.log('10' / 2);
console.log('10' + 2);
console.log(parseInt('10', 10) + 2);
console.log(parseInt('10', 20) + 2);
console.log(+ '10');
console.log(+ '10.2');
console.log(parseFloat('13.4') + 2);
console.log(10.0.toString());




























//==============================================================================================================================================================
console.log('======================УСЛОВНЫЕ ОПЕРАТОРЫ======================');

var cashFromStore = function(cash) {
	if (cash > 200) {
		return "Домой можно забрать 100 долларов";
	} if (cash == 200) {
		return "Домой можно забрать 50 долларов";
	} else {
		return "Нельзя домой сегодня брать деньги";
	};
};

console.log(cashFromStore(200));


//=====================================


//____________________ЛОГИЧЕСКИЙ ОПЕРАТОР_________________
//Создание функции на основе условия: "если в магазине есть яйца купить 10 булок хлеба, а если яиц нету то купить 1 булку хлеба"
var buySomeBread = function(eggs) {
	if (eggs) {
		return 10;
	} else {
		return 1;
	}
};

console.log(buySomeBread(true));




var buySomeBread2 = function(eggs) {
	if (eggs < 20) {
		return 11;
	} else if (eggs > 10) {
		return 15;
	} else {
		return 1;
	}
};

console.log(buySomeBread2(9));


































//==========================================================================================================================================================
console.log('======================Циклические алгоритмы======================');
//взять открытку со стола
//прочитать и отложить
//если остались еще открытки - повторить


var postcardsOnTable = function(postcard) {
	postcard --;
	console.log('На столе осталось ' + postcard + ' открытки!');

	if (postcard > 0){
		postcardsOnTable(postcard);
	}
};

postcardsOnTable(4);




//исользование встроеного в язык циклического оператора 'while'
var postcardsInTable = function(postcards) {
	while (postcards-- > 0) {
		console.log('В столе осталось ' + postcards + ' открытки!');
	}
};

postcardsInTable(4);



//______________________ЦИКЛИЧНЫЙ ОПЕРАТОР_______________
//позволяет сократить размер кода при использовании рекурсии
var washItems1 = function(itemsLeft1) {
	while (itemsLeft1-- > 0) {
		console.log('В раковине осталось ' + itemsLeft1 + ' предметов');
	}
};

washItems1(10); 



























//==========================МАССИВЫ=============================================================================================================================
console.log('======================МАССИВЫ======================');

console.log(['мой возраст: ' + 26 + 'лет', 'у меня светлые волосы', 'мой рост: ' + 186 + 'см']);

var namesMan = ['Саша', 'Коля', 'Ваня', 'Дима'];

console.log('Имя второго человека: ' + namesMan[1]);

namesMan[1] = 'Дядя Петя'; //присовения нового значения
console.log('Имя второго человека: ' + namesMan[1]);

//узнать сколько елементов в массиве - специальное поле length
console.log('В массиве всего ' + namesMan.length + ' имени!');

var numbersMans = [1, 2, 3, 6, 7, 8];
console.log('В массиве всего ' + numbersMans.length + ' чисел!');






var bag = [
	["яблоко", "груша", "виноград", "сливы"],
	["хлеб", "печенье", "булка"],
	["вино", "шампанское", "текила"]
];

console.log(bag);

var fruits = bag[0];
console.log(fruits);

var bread = bag[1];
console.log(bread);

var alcohol = bag[2];
console.log(alcohol);

console.log(alcohol[1]);
console.log(fruits[2]);


//__________________________МАССИВ__________________
var numbers = [1, 2, 3, 4];

console.log(numbers[Math.floor(Math.random() * numbers.length)]);
//Math.floor - округляет вниз
//Math.random - возвращает любое число из масива
//numbers.length - общие количество элементов в масиве



//тип данных "Строка" с использованием специальных символов
console.log('\tHello, I\'m a string\n');























//==========================ЦИКЛЫ===============================================================================================================================
console.log('======================ЦИКЛЫ======================');



//упрощение цикла с помощью конструкции "while"
var printsNames = function (names) {
	var index = 0;

	while (index < names.length) {
		console.log("Элемент " + index + ': ' + names[index]);
		index = index + 1;
	}
};

printsNames(["Гена", "Саша", "Коля", "Ваня", "Валя", "Маша"]);


console.log('-----------------------')
//еще лучше упрощение с помощью конструкции "for"
var printsForNames = function (names) {
	for ( var i = 0; i < names.length; i++) {
		console.log("Элемент " + i + ': ' + names[i]);
	}
};

printsForNames(["Гена", "Саша", "Коля", "Ваня", "Валя", "Маша"]);

























//================================================================================================================================================================
console.log('======================ОБЬЕКТЫ======================');

var emptyObject = {};
console.log(emptyObject);




var wizard = {
	name: 'Hendalf',
	age: 72,
	female: false,
	color: 'white',
	wizardsBag: ['посох', 'кулак', 'фаербол'],
	'wizards bag': ['посох', 'кулак', 'фаербол'],
	otherObject: {
		name: 'Sauron',
		age: 80,
		color: 'black'
	}
};

console.log(wizard);
console.log(wizard.name);
console.log(wizard.wizardsBag[2]);
console.log(wizard['wizards bag'][1]);
console.log(wizard.otherObject.name);

wizard.age = 84;
console.log(wizard.age);

wizard.level = 100;
console.log(wizard.level);








//циклы в обьектах

var wizardAlianced = {
	'friend1': 'Radagast',
	'friend2': 'Sarumyan',
	'friend3': 'Pokemon'
};

for (var i = 1; i <= 3; i++) {
	var wizardNames = wizardAlianced['friend' + i];
	console.log(wizardNames);
};


console.log('---------------------');


var badWizards = {
	'wizard1': 'Saruman',
	'wizard2': 'Woldemort',
	'wizard3': 'Sirin',
	'wizard4': 'Belatrys'
};

for (var i = 1; i <= 4; i++) {
	console.log(badWizards['wizard' + i]);
};





//МЕТОД - это функция в обьектах

var myWizard = {
	name: 'Hendalf',
	age: 72,
	level: 2,
	color: 'white',

	say: function() {
		console.log(myWizard.name + ' говорит: "Ты не пройдешь! Мой уровень: ' + myWizard.level + '"');
	},

	levelUp: function(level) {
		myWizard.level += level;
	}
};


myWizard.say();
myWizard.levelUp(3);
myWizard.say();



console.log('--------------------------')



var myWizard = {
	name: 'Hendalf',
	age: 72,
	level: 4,
	color: 'white',

	say: function() {
		console.log(myWizard.name + ' говорит: "Ты не пройдешь! Мой уровень: ' + myWizard.level + '"');
	},

	levelUp: function(level) {
		myWizard.level += level;
	},


	friends: {
		name: 'Harry Potter',
		age: 19,
		level: 2,

		sayHarry: function() {
			console.log('Привет, меня зовут ' + myWizard.friends.name);
			console.log('Мой уровень: ' + myWizard.friends.level);
		},

		levelUpHarry: function(level) {
			myWizard.friends.level += level;
		}
	}
};


myWizard.say();
myWizard.levelUp(3);
myWizard.say();

myWizard.friends.sayHarry();





console.log('---------------------')





var myWizard = {
	name: 'Hendalf',
	age: 72,
	level: 4,
	color: 'white',

	say: function() {
		console.log(myWizard.name + ' говорит: "Ты не пройдешь! Мой уровень: ' + myWizard.level + '"');
	},

	levelUp: function(level) {
		myWizard.level += level;
	},


	friends: {
		name: 'Harry Potter',
		age: 19,
		level: 4,

		sayHarry: function() {
			console.log('Привет, меня зовут ' + this.name); //переменная this указывает на текущий обьект у которого мы вызвали функцию
			console.log('Мой уровень: ' + this.level); //переменная this указывает на текущий обьект у которого мы вызвали функцию
		},

		levelUpHarry: function(level) {
			this.level += level; //переменная this указывает на текущий обьект у которого мы вызвали функцию
		}
	}
};


myWizard.say();
myWizard.levelUp(3);
myWizard.say();

myWizard.friends.sayHarry();
myWizard.friends.levelUpHarry(2);
myWizard.friends.sayHarry();




























console.log('====================РАБОТА С ГРАФИКОЙ CANVAS========================')
//=======================================================================РАБОТА С ГРАФИКОЙ CANVAS========================================================================
//DOM элемент канваса
var canvas = document.getElementById('canvas');

//Контектс отрисовки
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightgreen';
//заливка канваса
ctx.fillRect(0, 0, 300, 150);
//размер и положение канваса


//МОЖНО ЗАЛИВАТЬ НЕ СПЛОШНОЙ ЦВЕТ А ГРАДИЕНТ
var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');

var gradient = ctx2.createLinearGradient(0, 0, 300, 150);
gradient.addColorStop(0, 'lightgreen');
gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

ctx2.fillStyle = gradient;
ctx2.fillRect(0, 0, 300, 150);


//для очистки холста используется метод:
//ctx.clearRect(0, 0, 300, 150);




//РАБОТА С СЛОЖНЫМИ ФИГУРАМИ
var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');

ctx3.beginPath();
//так задается начало контура, все что будет нарисовано между вызовами будет считатсья одной фигурой
ctx3.moveTo(100, 100);
//перемещение фигуры
ctx3.lineTo(80, 60);
//отрисовувает линию с послудней точки на которой мы остановились
ctx3.lineTo(110, 80);
ctx3.lineTo(125, 40);
ctx3.lineTo(140, 80);
ctx3.lineTo(170, 60);
ctx3.lineTo(150, 100);
ctx3.lineTo(150, 100);
ctx3.bezierCurveTo(140, 90, 110, 90, 100, 100);
//замыкание фигуры с помощью кривой Безье
ctx3.closePath();
ctx3.stroke();
//вызов метода stroke - нарисует обводку и трисовку всех фигур
ctx3.fill();
//заливка фигуры





//РАБОТА С ТЕКСТОМ
var canvas4 = document.getElementById('canvas4');
var ctx4 = canvas4.getContext('2d');

ctx4.font = '30px Tahoma';
ctx4.textBaseLine = 'hanging';
ctx4.fillText('Привет я из текста', 0, 40);
ctx4.fillText('в канвасе', 0, 70);

































console.log('==========================СОЗДАНИЕ и РАБОТА С DOM ЭЛЕМЕНТАМИ=====================')
//==============================================================================СОЗДАНИЕ И РАБОТА С DOM-ЭЛЕМЕНТАМИ============================================================================
//выводит все DOM дерево документа в консоль
for (var i = 0; i < document.children.length; i++) {
	console.log(document.children[i]);
}


//===================================



//узнать имя текущего элемента================
// for (var i = 0; i <= document.children.length; i++) {
// 	var child = document.children[i];

// 	console.log('Имя элемента ' + i + ': ' + child.tagName);

// 	console.log('Этот элемент HTML: ' + (child.tagName.toLowerCase() === 'html'));
// }



//==========================



// var html = document.children[0];

// for (var i = 0; i <= html.children.length; i++) {
// 	var child = html.children[i];
// 	console.log(child.tagName.toLowerCase());

// 	for (var j = 0; j <= child.children.length; j++) {
// 		var innerChild = child.children[j];
// 		console.log('|---' + innerChild.tagName.toLowerCase());
// 	}
// }



//практика вывода отдельных элементов в консоль
var html = document.children[0];
var htmlHead = html.children[0];
var htmlBody = html.children[1];

console.log(htmlHead.children[2]);
console.log(htmlBody.children[0]);
console.log(htmlBody.children.length);





//==================================





//методы доступа к документу
var firstTag = document.children[0].children[1].children[0].children[0];
console.log(firstTag.tagName.toLowerCase());


console.log(firstTag === document.getElementById('firstTag')); //доступ через id
console.log(firstTag === document.querySelector('.pop-up_menu')); //доступ через class






//=================================






//методы getAttribute и setAttribute возвращают и (добавляют или изменяют) 
//значение указаного атрибута элемента
var pageHeading = document.querySelector('h1');
pageHeading.setAttribute('style', 'color: green;'); //изменяет стиль текста

console.log(pageHeading.getAttribute('class')); //возвращает значение атрибута



/*Большинство HTML-атрибутов доступны в виде свойств DOM-элемента, и к ним можно обращатся напрямую. 
Исключение составляют те атрибуты, названия которых являются ключевыми или зарезервироваными для будущих версий словами JS,
например class или for у лейблов. Чтобы обратиться к классу нужно воспользоваться свойством 'className', а чтобы прочитать лейбл,
нужно воспользоваться свойством 'htmlFor'*/

var pageHeading = document.querySelector('h1');

console.log(pageHeading.className);

pageHeading.className = 'myTitle'; //изменил имя класа в теге h1
console.log(pageHeading.className);






console.log('-------------------------');
//=================================






// обьект 'classList' помогает работать с атрибутами нескольких классов
var pageHeading = document.querySelector('h1');

pageHeading.classList.add('myclass'); //добавляет класс
console.log(pageHeading.className);

pageHeading.classList.remove('myTitle'); //удаляет класс
console.log(pageHeading.className);






//================закрипление-практика================
console.log('-------------------------');




var htmlBody = document.querySelector('body');
var htmlBodyP = htmlBody.querySelector('p');
var htmlBodyH1 = htmlBody.querySelector('h1');

console.log(htmlBody.classList);
console.log(htmlBody.className);

htmlBody.children[2].setAttribute('style', 'color: red'); //второе место в массиве может поменятся поэтому лучше:
// htmlBodyP.setAttribute('style', 'color: red');

htmlBodyH1.classList.add('title', 'em'); //добавляем классы заголовку, но надо учитывать документ считывается синхронно,
console.log(htmlBodyH1.className); // и класы добавились к первому попавшемуся h1 в теге body







//===============УПРАВЛЕНИЕ ПОЛОЖЕНИЕМ DOM-элементов В ДЕРЕВЕ




var pools = document.querySelectorAll('.pool');
var blocks = document.querySelectorAll('.el');

pools[0].removeChild(blocks[0]); // метод removeChild отсоединяет элемент из dom-дерева
pools[1].appendChild(blocks[0]); //метод appendChild добавляет элемент в dom-дерево в конец блока
pools[1].appendChild(blocks[1]); //не обязательно придварительно отсоединять элемент

pools[1].insertBefore(blocks[3], blocks[1]); //метод insertBefore добавляет элемент в любое место перед...

var replaced = pools[0].replaceChild(blocks[3], blocks[2]); // метод заменяет елементы и возвращает элемент который был заменен
pools[1].appendChild(replaced);


pools[0].insertBefore(blocks[2].cloneNode(true), blocks[3]); //метод cloneNode(true) клонирует элемент со всем содержимым
pools[1].appendChild(blocks[3].cloneNode(true)); //метод cloneNode(true) клонирует элемент со всем содержимым

if (pools[0].contains(blocks[2])) { //метод contains проверяет на содержание элемента
	pools[0].style.background = 'red';
};





//=================================
console.log('---------------------')





//создание DOM элемента
var description = document.querySelector('p');
console.log(description.innerHTML); //возвращает всю разметку с тегами
console.log(description.textContent); //возвращает только текстовове содержимое


// -----------------------


var textInHtml = document.querySelector('b');

var newTextInHtml = '<i>New description for JavaScript</i>';

textInHtml.textContent = newTextInHtml; //добавляем только сам текст таким каким он записан в скобках
textInHtml.innerHTML = newTextInHtml; //добавляем содержимое в документ с учетем свойст, но так опасно, для взлома...

// у такого способа есть ряд проблем, т.к. все элементы удаляются и создаются вновь каждый раз, когда мы вставляем новую разметку, поэтому используем:
//методы 'insertAdjacentHTML' и 'insertAdjacentText' позволяют вставить разметку или текст точечно, например:


var pool = document.querySelector('.pool');

var seventhElementHTML = '<div class="el el-7"><span>6</span></div>';

pool.insertAdjacentHTML('beforeEnd', seventhElementHTML);

//можно использовать метод insertAdjacentText, только в этом случае создается только текст
//метод insertAdjacentText нужно использовать в приоритете потому что с методом insertAdjacentHTML на сайт могут проникнуть злоумышленики



// -----------------------



var pools = document.querySelectorAll('.pool');

var template = document.querySelector('#element-template').content.querySelector('div'); //content эдинственное свойство которое хранит элемент

for (var i = 0; i < 8; i ++) {
	var element = template.cloneNode(true); // клонирование элемента со всем содержимым
	element.children[0].textContent = i;
	pools[2].appendChild(element);
};










































console.log('==========================ЗАПУСК АСИНХРОННОГО КОДА НА ПРИМЕРЕ СОБЫТИЙ=====================')
//======================ОБРАБОТКА СОБЫТИЙ===========================ЗАПУСК АСИНХРОННОГО КОДА НА ПРИМЕРЕ СОБЫТИЙ======================================================================

var button = document.getElementById('button_for_click');

//методом addEventListener мы добавляем обработчик события который запускает функцию в даною случае после клика 'click'
button.addEventListener('click', function() {
	alert('Hello from first handler');
});
// метод addEventListener на вход принимаут три параметра:
//1 - строковое название события - они могут быть разными
//2 - функция обработчик (в даном случае анонимная, тоесть не подготовлена заранее, а создается сразу)
//3  - ?




//---------------------




//удаление обработчика событий методом 'removeEventListener' вожно только тогда когда функция-обработчик была подготовлена заранее
var button = document.getElementById('button_for_click');

var buttonClickHandler = function() {
	alert('Hello from second handler');
};

button.addEventListener('click', buttonClickHandler);

button.removeEventListener('click', buttonClickHandler); //удаляет обработчик события




//КАК ПРАВИЛЬНО ИМЕНОВАТЬ ОБРАБОТЧИКИ СОБЫТИЙ:
// пример: обьект + событие + Handler (buttonClickHandler)
// пример: on + обьект + событие (onButtonClick)
// ИСПОЛЬЗОВАТЬ ТОЛЬКО ОДИН ИЗ СПОСОБОВ







//ФАЗЫ СОБЫТИЙ ================================

// var divElements = document.querySelectorAll('div');
// var button = document.getElementById('clickable');
// var clickedElement = null;


// var clickHandler = function(evt) {
// 	console.log(evt);

// 	if (clickedElement) {
// 		clickedElement.classList.remove('clicked')
// 	}

// 	clickedElement = evt.currentTarget;
// 	clickedElement.classList.add('clicked');
// 	debugger;
// };


// for (var i = 0; i < divElements.length; i++) {
// 	divElements[i].addEventListener('click', clickHandler);
// };

// button.addEventListener('click', clickHandler);
// document.body.addEventListener('click', clickHandler);



//ФАЗА "ВСПЛЫТИЕ" И ФАЗА "ЗАХВАТ" -------- ПОТОМ К НИМ ЕЩЕ ВЕРНЕМСЯ









//===============ОБРАБОТКА СОБЫТИЙ - ОТКРЫТИЕ И ЗАКРТЫТИЕ ОКНА==========================

var windowPopUp = document.querySelector('.pop-up');
var windowPopUpForm = document.querySelector('.pop-up__window');
var windowClose = windowPopUpForm.querySelector('.pop-up__window__close');
var windowPopUpOpen = document.querySelector('.pop-up_menu__list1');


// windowPopUpOpen.addEventListener('click', function() {
// 	windowPopUp.classList.remove('hidden');
// });

// windowClose.addEventListener('click', function() {
// 	windowPopUp.classList.add('hidden');
// });


// //закрытие окна с помощью ESC
// document.addEventListener('keydown', function(evt) { //обьект event передается единственным параметром в каждый из обработчиков событий
// 	if (evt.keyCode === 27) { //свойство keyCode хранит код нажатой клавиши, в данном случае ESC - 27
// 		windowPopUp.classList.add('hidden');
// 	}
// });


// //открытие окна кнопкой Enter после того как на кнопку сайта поставлен фокус с клавиатуры
// windowPopUpOpen.addEventListener('keydown', function(evt) {
// 	if (evt.keyCode === 13) {
// 		windowPopUp.classList.remove('hidden');
// 	}
// });


// //закрытие окна кнопкой Enter после того как на крестик окна поставлен фокус с клавиатуры
// windowClose.addEventListener('keydown', function(evt) {
// 	if (evt.keyCode === 13) {
// 		windowPopUp.classList.add('hidden');
// 	}
// });


//ТОТ ЖЕ САМЫЙ КОД ТОЛЬКО УПОРЯДОЧЕНЫЙ И ЧИТАБЕЛЬНЫЙ

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

//--------------------

var onPopupEscPress = function(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
		closePopup();
	}
};


var openPopup = function() {
	windowPopUp.classList.remove('hidden');
	document.addEventListener('keydown', onPopupEscPress);
};


var closePopup = function() {
	windowPopUp.classList.add('hidden');
	document.removeEventListener('keydown', onPopupEscPress);
};

//--------------------

windowPopUpOpen.addEventListener('click', function() {
	openPopup();
});

windowPopUpOpen.addEventListener('keydown', function(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
});

//--------------------

windowClose.addEventListener('click', function() {
	closePopup();
});

windowClose.addEventListener('keydown', function(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		closePopup();
	}
});






//===============ОБРАБОТКА СОБЫТИЙ - ВАЛИДАЦИЯ ФОРМЫ==========================
//в основном использовать стандартный атрибуты HTML5, но если нужно провести сложные действия - JS





//замена стандортного текста от браузера для полей формы
var familyNameInput = document.getElementById('family-name');
var firstNameInput = document.getElementById('first-name');
var mailInput = document.getElementById('mail');


//задаем текст на замену стандартному от браузера с помощью условного оператора
familyNameInput.addEventListener('invalid', function (evt) {
	if (familyNameInput.validity.tooShort) {
		familyNameInput.setCustomValidity('Фамилия должна состоять минимум из 2-х символов');
	} else if (familyNameInput.validity.tooLong) {
		familyNameInput.setCustomValidity('Фамилия не должна превышать 25-ть символов');
	} else if (familyNameInput.validity.valueMissing) {
		familyNameInput.setCustomValidity('Обязательное поле');
	} else {
		familyNameInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});

firstNameInput.addEventListener('invalid', function (evt) {
	if (firstNameInput.validity.tooShort) {
		firstNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
	} else if (firstNameInput.validity.tooLong) {
		firstNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
	} else if (firstNameInput.validity.valueMissing) {
		firstNameInput.setCustomValidity('Обязательное поле');
	} else {
		firstNameInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});

mailInput.addEventListener('invalid', function (evt) {
	if (mailInput.validity.tooShort) {
		mailInput.setCustomValidity('Имя email должно состоять минимум из 2-х символов');
	} else if (mailInput.validity.tooLong) {
		mailInput.setCustomValidity('Имя email не должно превышать 45-ти символов');
	} else if (mailInput.validity.valueMissing) {
		mailInput.setCustomValidity('Обязательное поле');
	} else {
		mailInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});






























console.log('=====================================ПЕРЕТАСКИВАНИЕ======================================')
//=======================================================================ПЕРЕТАСКИВАНИЕ=====================================================



// var ball = document.getElementById('ball');
// // var setup = document.querySelector('.section_for_button');

// ball.addEventListener('mousedown', function(evt) {
// 	evt.preventDefault();

// 	var startCoords = {
// 		x: evt.clientX,
// 		y: evt.clientY
// 	};

// 	var onMouseMove = function(moveEvt) {
// 		moveEvt.preventDefault();

// 		var shift = {
// 			x: startCoords.x - moveEvt.clientX,
// 			y: startCoords.y - moveEvt.clientY
// 		};

// 		startCoords = {
// 			x: moveEvt.clientX,
// 			y: moveEvt.clientY
// 		};

// 		ball.style.top = (ball.offsetTop - shift.y) + 'px';
// 		ball.style.left = (ball.offsetLeft - shift.x) + 'px';
// 	};

// 	var onMouseUp = function(upEvt) {
// 		upEvt.preventDefault();

// 		document.removeEventListener('mousemove', onMouseMove);
// 		document.removeEventListener('mouseup', onMouseUp);
// 	};

// 	document.addEventListener('mousemove', onMouseMove);
// 	document.addEventListener('mouseup', onMouseUp);
// });







// var ball = document.getElementById('ball');

// ball.onmousedown = function(e) {

//   var coords = getCoords(ball);
//   var shiftX = e.pageX - coords.left;
//   var shiftY = e.pageY - coords.top;

//   ball.style.position = 'absolute';
//   document.body.appendChild(ball);
//   moveAt(e);

//   ball.style.zIndex = 1000; // над другими элементами

//   function moveAt(e) {
//     ball.style.left = e.pageX - shiftX + 'px';
//     ball.style.top = e.pageY - shiftY + 'px';
//   }

//   document.onmousemove = function(e) {
//     moveAt(e);
//   };

//   ball.onmouseup = function() {
//     document.onmousemove = null;
//     ball.onmouseup = null;
//   };

// }

// ball.ondragstart = function() {
//   return false;
// };

// function getCoords(elem) {   // кроме IE8-
//   var box = elem.getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// }