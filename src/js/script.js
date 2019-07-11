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


