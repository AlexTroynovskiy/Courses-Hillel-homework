
// Найти  количество положительных элементов.

var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

var arrayLength = array.filter(function (element) {
    return element > 0;
});
console.log(arrayLength.length);

// Найти сумму  положительных элементов.

var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

var arraySum = array.filter(function (element) {
    return element > 0;
});
var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arraySum.reduce(reducer));

// Найти минимальный элемент массива и его порядковый номер.

var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
var minElement = Math.min(...array);
console.log(array.indexOf(-63));
console.log(minElement);

// Найти максимальный элемент массива и его порядковый номер.

var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
var maxElement = Math.max(...array);
console.log(array.indexOf(76));
console.log(maxElement);

// Определить количество отрицательных элементов.

var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

var arrayLengthNegative = array.filter(function (element) {
    return element < 0;
});
console.log(arrayLengthNegative.length);

// Найти количество нечетных положительных элементов.

var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

var OddNumbers = array.filter(function (element) {
    return element > 0 && element % 2 !== 0;
});
console.log(OddNumbers.length);

// Найти количество четных положительных элементов.

var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

var EvenNumbers = array.filter(function (element) {
    return element > 0 && element % 2 === 0;
});
console.log(EvenNumbers.length);

// Найти сумму четных положительных элементов.

var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
var SumEvenNumbers = array.filter(function (element) {
    return element > 0 && element % 2 === 0;
});
var reducer1 = (acamulator, currentValue) => acamulator + currentValue;
console.log(SumEvenNumbers.reduce(reducer1));

// Найти сумму нечетных положительных элементов.

var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
var SumOddNumbers = array.filter(function (element) {
    return element > 0 && element % 2 !== 0;
});
var reducer1 = (acamulator, currentValue) => acamulator + currentValue;
console.log(SumOddNumbers.reduce(reducer1));

// Найти произведение положительных элементов.

var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
var MultiNumbers = array.filter(function (element) {
    return element > 0;
});
var reducer1 = (acamulator, currentValue) => acamulator * currentValue;
console.log(MultiNumbers.reduce(reducer1));

// Определить количество элементов, равных 4.
var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

var coincidence = array.filter(function (element) {
    return element === 4;
});
console.log(coincidence.length);

// Найти наибольший среди элементов массива, остальные обнулить. 
var array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
var maxElement1 = Math.max(...array);
console.log(maxElement1);

var ZeroArray = array.map(function (el) {
    if (el < maxElement1) {
        return element = 0;
    } else {
        return el = maxElement1;
    }
});
console.log(ZeroArray);



//  Взять еще один массив и 
//  Вычислить разность соответствующих элементов массивов и записать в новый массив.


var array1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

var array2 = [46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47, 16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37];

var rezult = array1.map(function (element, index) {
    return element - array2[index];
});
console.log(rezult);