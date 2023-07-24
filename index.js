//Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

 /* 1.Знайти суму 
 Знайти кількість позитивних елементів.
 9.Знайти добуток позитивних елементів.*/
 
const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumPositive = 0;
let total = 1;
let positiveAmount = 0;
for(let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sumPositive += array[i];
        total *= array[i];
        positiveAmount ++;
    }
}
console.log('сума позитивних елементів:', sumPositive);
console.log('добуток позитивних елементів:', total);
console.log('кількість позитивних елементів:', positiveAmount);

//2.Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = array[0];
let minElementNumber = 0;
for (let i = 1; i < array.length; i++) {
if (array[i] < minElement) {
    minElement = array[i];
    minElementNumber = i;
}
 }
console.log('мінімальний елемент масиву', minElement);
console.log('порядковий номер мінімального елемента масиву', minElementNumber);



//4.Визначити кількість негативних елементів.
let negativeAmount = 0;
for(let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeAmount ++;
    }
}
console.log('кількість негативних елементів', negativeAmount);

/* 5.Знайти кількість непарних позитивних елементів. 
8.Знайти суму непарних позитивних елементів.*/
let sumoddPositive = 0;
let oddPositiveElment = 0;
for(let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        sumoddPositive += array[i];
        oddPositiveElment ++;
    }
}
console.log('кількість непарних позитивних елементів', oddPositiveElment);
console.log('сума непарних позитивних елементів', sumoddPositive);

/*6.Знайти кількість парних позитивних елементів.
7.Знайти суму парних позитивних елементів.*/
let sumEvenPositive = 0;
let evenPositiveElment = 0;
for(let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        sumEvenPositive += array[i];
        evenPositiveElment ++;
    }
}
console.log('кількість парних позитивних елементів', evenPositiveElment);
console.log('сума парних позитивних елементів',sumEvenPositive);

/*3.Знайти максимальний елемент масиву та його порядковий номер.
10.Знайти найбільший серед елементів масиву, остальні обнулити.*/

let maxElement = array[0];
let maxElementNumber = 0;
for (let i = 1; i < array.length; i++) {
if (array[i] > maxElement) {
    maxElement = array[i];
    maxElementNumber = i;
}
 }
 for (let i = 0; i < array.length; i++) {
    if(array[i] !== maxElement) {
     array[i] = 0;
    }
 }
console.log('максимальний елемент масиву', maxElement);
console.log('порядковий номер максимального елемента масиву', maxElementNumber);
console.log("масив після обнулення всіх елементів, окрім найбільшого:", array);