//Решение простой задачи на вычысление расстояния с выводом на консоль

//Задаем переменным  имена и исходные значения
var time = 3;
var speedOfFirstCyclist = 12;
var speedOfSecondCyclist = 14;

//_____________АЛГОРИТМ________________
//найти расстояние которое проехал 1-й 
var distanceOfFirstCyclist = speedOfFirstCyclist * time;

//найти расстояние которое проехал 2-й 
var distanceOfSecondCyclist = speedOfSecondCyclist * time;

//сложить полученые расстояния
var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;

console.log(totalDistance);






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







//_________________ТЕРНАРНЫЙ ОПЕРАТОР______________
//создание той же функции buySomeBread только задавая следующий оператор
var buySomeBreadT = function(eggs) {
	return eggs ? 10 : 1;
};

console.log(buySomeBreadT(false));






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






//______________________ЦИКЛИЧНЫЙ ОПЕРАТОР_______________
//позволяет сократить размер кода при использовании рекурсии
var washItems1 = function(itemsLeft1) {
	while (itemsLeft1-- > 0) {
		console.log('В раковине осталось ' + itemsLeft1 + ' предметов');
	}
};

washItems1(10); 






//__________________________МАССИВ__________________
var numbers = [1, 2, 3, 4];

console.log(numbers[Math.floor(Math.random() * numbers.length)]);
//Math.floor - округляет вниз
//Math.random - возвращает любое число из масива
//numbers.length - общик количество элементов в масиве



//тип данных "Строка" с использованием специальных символов
console.log('\tHello, I\'m a string\n');








//=====================================ПРАКТИКА============================
console.log('==============ПРАКТИКА==============');



//ПРОСТОЙ АЛГОРИТМ
var firstChicken = 12;
var secondChicken = 15;
var totalChickenEggs = firstChicken + secondChicken;

console.log(totalChickenEggs);







//ПРОСТАЯ ФУНКЦИЯ
var firstThing = 'maybe ';
var secondThing  = 1;

var theFirst = function() {
	return totalThings = firstThing + secondThing;
};

console.log(theFirst());





//ПРОСТАЯ ФУНКИЯ С ПРИМЕНЕНИЕМ ПАРАМЕТРОВ КОТОРЫЕ МОЖНО МЕНЯТЬ
var theSecond = function(goodSecondApple, badSecondApple) {
	return togetherApples = goodSecondApple + badSecondApple;
};

console.log(theSecond(2, 15));



//ПРИВИДЕНИ ТИПОВ
console.log('10' / 2);
console.log('10' + 2);
console.log(parseInt('10', 10) + 2);
console.log(parseInt('10', 20) + 2);
console.log(+ '10');
console.log(+ '10.2');
console.log(parseFloat('13.4') + 2);
console.log(10.0.toString());




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



//УПРОЩЕННЫЙ ВАРИАНТ РЕШЕНИЯ ТОЙ ЖЕ ЗАДАЧИ (ФУНКЦИИ) ТОЛЬКО С ИСПОЛЬЗОВАНИЕМ ТЕРНАРНОГО ОПЕРАТОРА
var lightInTheSecondRoom = function(light) {
	return light ? 'turn off' : 'turn on';
};

console.log(lightInTheSecondRoom(true));
console.log(lightInTheSecondRoom(false));












//=====================РАБОТА С ГРАФИКОЙ CANVAS======================
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





//==============================СОЗДАНИЕ DOM-ЭЛЕМЕНТОВ======================
var pool = document.querySelector('.pool');

var seventhElementHTML = '<div class="el el-7"><span>6</span></div>';

pool.insertAdjacentHTML('beforeEnd', seventhElementHTML);
//можно использовать метод insertAdjacentText, только в этом случае создается только текст



//создание DOM элемента
var pools = document.querySelectorAll('.pool');

var template = document.querySelector('#element-template').content.querySelector('div');

for (var i = 0; i < 8; i ++) {
	var element = template.cloneNode(true);
	element.children[0].textContent = i;
	pools[1].appendChild(element);
}