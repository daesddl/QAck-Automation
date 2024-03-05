//PRIMITIVE

//1. STRING
const first_s = 'Hello'; 
const second_s = "World"; 
let result_s  = first_s + " " + second_s; // 'Hello World' 
result_s = `${first_s} ${second_s}`; //  'Hello World'
console.log(result_s);

//2. NUMBER
const first_n = 123; 
const second_n = 0b11;
const third_n = 2.5;
const val1 = 1;
const val2 = 2;
console.log(val1 + val2);

//3. BIGINT

//4. BOOLEAN
const first_b = true; 
const second_b = false; 

//5. UNDEFINED
let first_u;
const second_u = undefined; 
console.log(first_u); // undefined
console.log(second_u); // undefined

//6. SYMBOL
//7. NULL

//##########################
//COMPLEX

//OBJECTS
//Ex. 1
const obj = {
    key: 'value',
};
const arr = [1, 2, '1', '2'];
console.log(obj.key);
console.log(arr[3]);

//Ex. 2
const obj1 = { name: "Pavel" }; 
console.log(obj1.name); // "Pavel"

//Ex. 3
const obj2 = {
    name: 'John Doe',
    age: 33,
    isEmployed: true,
    friends: ['Mike', 'Jack'],
    address: {
        street: "Pine",
        house: 4
    }
}
console.log(obj2.address.street);
console.log(obj2['name']);
console.log(obj2.address.street);
console.log(obj2.friends);
console.log(obj2.friends[0]);

const property = 'age';
console.log(obj2[property]); //cuando accedemos a una propiedad a travez de corchetes, la propiedad debe escribirse entre comillasm es  commo poner obj['age']

//Ex.4
let a2 =  5;
let b2 = a2;
a2 = 7;
console.log(a2);
console.log(b2);

//Ex. 5
let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference

//Ex. 6
let a = {};
let b = a; // copy the reference
alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

//Ex. 7
let a1 = {};
let b1 = {}; // two independent objects
alert( a1 == b1 ); // false

//Ex. 8
const user1 = {
    name: "John"
};
user1.name = "Pete"; // (*)
alert(user1.name); // Pete



//ARRAY
//Ex. 1
const arr1 = [ 1, "two", false, {a: 1}, [ 1,2,3 ], {key: "value"}];
console.log(arr1[0]); // 1
console.log(arr1[1]); // 'two'
console.log(arr1[4][0]); // 1
console.log(arr1[4][2]); // 3
console.log(arr1[3]); // {a: 1} object
console.log(arr1[3].a); // 1 object
console.log(arr1[5].key); // value object
console.log(arr1.length); //6 number or elements

//Ex. 2
let arr2 = [1, 2, 3];
let arr3 = arr2;
arr2[0] = 10;
console.log(arr2[0]);
console.log(arr3[0]);