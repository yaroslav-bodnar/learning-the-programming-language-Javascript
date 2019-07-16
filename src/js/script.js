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
};
//запуск функции:
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
	}
};

washNextItem(10);
