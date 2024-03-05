//Assignment operators
let a = 5;
a += 5;
console.log(a); // 10

//Arithmetic operators
console.log(2 + 3); // 5
console.log(2 - 1); // 1
console.log(2 * 5); // 10

//String concatenation
const firstName = 'John';
const lastName = 'Doe';
console.log('My name is ' + firstName + ' ' + lastName); // My name is John Doe


//Ex. 1 Assignment
let x = 42;
let add = x + 4;
console.log('sum = ', add);
let sub = x - 4;
console.log('sub = ', sub);
let mul = x * 4;
console.log('mul = ', mul);
let div = x / 2;
console.log('div = ', div);
let mod = x % 5; //modulo = residuo de la div. Ej: 7/5, residuo = 2
console.log('mod = ', mod);
let pow = x ** 1;
console.log('pow = ', pow);

//Ex. 2 Assignment
let i = 1;
let k = ++i;
console.log('k = ', k);
console.log('i = ', i);

//Ex. 3 Assignment
let i2 = 1;
let k2 = i2++;
console.log('k2 = ', k2);
console.log('i2 = ', i2);

//Ex. 4 Assignment
let j = 1;
j--;
--j;
console.log('j = ', j);

//Ex. 5 Assignment
const INCREMENT_VALUE = 6;
let value1 = 100;
let value2 = 100;
let value3 = 100;
let value4 = 100;
let value5 = 100;
value1 += INCREMENT_VALUE;
console.log('value1 = ', value1);
value1 -= INCREMENT_VALUE;
console.log('value2 = ', value2);
value3 *= INCREMENT_VALUE;
console.log('value3 = ', value3);
value4 /= INCREMENT_VALUE;
console.log('value4 = ', value4);
value5 %= INCREMENT_VALUE;
console.log('value5 = ', value5);

//Ex. 1 Comparision
let eq1 = 5 == 5;
let eq2 = 5 == '5';
console.log('eq1 = ', eq1);
console.log('eq2 = ', eq2);