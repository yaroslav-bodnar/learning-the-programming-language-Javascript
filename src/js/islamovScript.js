//=================типы данных========================
// console.log(n1);
// ошибка null - это когда в коде просто не существует таких данных

var elem;
console.log(elem);
// ошибка undefined - это когда в коде нет такого значения


obj = {
	name: "John",
	age: 25,
	isMarried: false
}
console.log(obj.name);
console.log(obj["age"]);



var mas = ['plum', 'orange', 'apple'];
console.log(mas[0]);
console.log(mas[2]);


// alert('Hello!');
// confirm("Are you here?");
// это всплывающие окна

// prompt('Есть ли вам 18?', '18');

// var answer = prompt('Есть ли вам 18?', '18');
// console.log(typeof(answer));

// var answerNumber = +prompt('Есть ли вам 18?', '18');
// console.log(typeof(answerNumber));



//switch - используется вместо условия if и для его сокращения
var num = 50;

switch (num) {
	case 49:
		console.log('Мало');
		break;
	case 80:
		console.log('Много');
		break;
	case 50:
		console.log('В точку');
		break;
	default:
		console.log('Не в этот раз');
		break;
}

// ======================ЦЫКЛЫ===================
while (num < 55) {
	console.log(num);
	num++;
}


do {
	console.log(num);
	num++

}
while (num < 55);







for (let i = 0; i < 8; i++) {
	console.log(i);
}
