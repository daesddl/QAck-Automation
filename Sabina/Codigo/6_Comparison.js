//Comparison Operators
const a = 5;
const b = 6;
const c = 7;
const d = '7';
console.log(a > b); // false
console.log(a < b); // true
console.log(a == b); // false
console.log(c == d); // true
console.log(c === d); // false

//Binary Logical operatos
const a1 = true;
const b1 = false;
console.log(a1 || b1); // true, OR = suma, 1 + 0 = 1 = true
console.log(a1 && b1); // false, AND = multi, 1 * 0 = 0 = false

//typeOf Operator
console.log(typeof "John"); // Output: string
console.log(typeof 3.14); // Output: number
console.log(typeof NaN); // Output: number
console.log(typeof false); // Output: boolean
console.log(typeof [1, 2, 3, 4]); // Output: object
console.log(typeof {name:'John', age:34}); // Output: object
console.log(typeof new Date()); // Output: object
console.log(typeof function() {}); // Output: function
console.log(typeof myCar); // Output: undefined
console.log(typeof null); // Output: object