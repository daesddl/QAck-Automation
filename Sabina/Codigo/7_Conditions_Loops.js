//INTRO
//C O N D I T I O N S
if(true) {
    // this block of code will be executed
}

if(false) {
// this block of code will NOT be executed
}


//############################
//IF... ELSE
if (2 * 4 == 8) {
  console.log('That is right!');
} else {
  console.log('Wrong!');
}

//Ex. 2
const x = 5;
if (x === 5) {
  console.log('This is true');
}
if (x == 6) {
  console.log('I am here');
}

//Ex. 3
const y = 5;
if (y === 5) {
  console.log('This is true');
}
console.log('I am here');

//Ex. 4
const z = 5;
if (z === 5) console.log('This is true');

//Ex. 5
const w = 5;
if (w === 6) {
  console.log('This is true');
} else {
  console.log('Else statement');
}
console.log('I am here');


//############################
//ELSE IF
let num = 50;
if (num < 49) {
  console.log('Wrong!');
} else if (num > 100) {
  console.log('Too much!');
} else {
  console.log('That is right!');
}

//Ex. 1
/** 
 * 18-25 -> 18%
 * 26-40 -> 20%
 * 41-99 -> 30%
 */
const age = 20;
if (age >= 18 && age <= 25) {
  console.log('18%');
} else if (age >= 26 && age <= 40) {
  console.log('20%');
}else if (age >= 40 && age <= 99) {
  console.log('30%');
} else {
  console.log('Error');
}


//############################
//TERNARY OPERATOR
const a = 3;
const b = 5;
const c = (a > b) ? a - b : a + b; //<if_validation> ? <true_condition> : <false_condition>
console.log(c); // 8

//Ex. 1
const num1 = 5;
if (num1 === 5) {
  console.log('true');
} else {
  console.log('false');
}

//Ex. 2
const num2 = 5;
(num2 === 5) ? console.log('true') : console.log('false'); //<if_validation> ? <true_condition> : <false_condition>


//############################
//Switch
const num3 = 50;
switch (num3) {
  case 50:
    console.log('fifty!');
    break;
  case 60:
    console.log('sixty');
    break;
  case 70:
    console.log('seventy');
    break;
  default:
    console.log('Default behaviour');
    break;
}

//Ex. 1
const title = 'Junior';
//const title = 'Senior';
//const title = 'asdasdasds';
switch (title) {
  case 'Junior':
    console.log('You are junior');
    break;
  case 'Middle':
    console.log('You are Middle');
    break;
  case 'Senior':
    console.log('You are Senior');
    break;
  default:
    console.log('Sorry, I do not know who you are');
    break;
}


//#########################################################
//#########################################################
//L O O P S
for (let step = 0; step < 5; step++) {
  // Run 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

//############################
//WHILE
let num4 = 50;
while (num4 < 55) {
  console.log(num4);
  num4++;
}

//Ex. 1
let sum = 0;
let i = 0;
//while (i < 0) {
while (i < 5) {
  i++;
  sum += i;
}
console.log(sum); //15

//############################
//DO WHILE
let num5 = 50;
do {
  console.log(num5);
  num5++;
} while (num5 < 45);

//Ex. 1
let sum1 = 0;
let j = 0;
do {
  j++;
  sum1 += j;
} while ( j < 5);
//} while ( j < 0);
console.log(sum1); //15


//############################
//FOR
for (let i = 0; i < 8; i++) {
  console.log(i);
}

// Example (breaking a loop)
for (let i = 0; i < 8; i++) {
  if (i == 6) {
    break; //finish the execution
  }
  console.log(i);
}

// Example (continue loop execution)
for (let i = 0; i < 8; i++) {
  if (i == 6) {
    continue; //skips 6
  }
  console.log(i);
}

//Ex. 1
let sum2 = 0;
for (let i = 0; i < 6; i++) {
  sum2 += i;
}
console.log(sum2);

//Ex. 2
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Ex. 3
let sum3 = 0;
const arr2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2.length; i++) {
  sum3 += arr2[i];
}
console.log(sum3);


//############################
//FOR... IN
//For objects
const person = {
  firstName: 'John',
  lastName: 'Dou',
  age: 30,
}
for (let key in person) { //for (<value_type> key in <object_name>) { ... }
  console.log(key, person[key]) //print: <name_key> <object>.<key_value> = firstName John ...
};
// firstName John
// lastName Dou
// age 30

//Ex. 1
const obj = {
  name: "John",
  lastName: "Doe"
};
for (let key in obj) { //for (<value_type> key in <object_name>) { ... }
  console.log(key); //only the <name_key>, name \n lastName
  console.log(obj[key]); //only the <object>.<key_value>, John \n Doe
}


//############################
//FOR... OF
const arrayOfNumber = [1,2,3,4,5];
for (let el of arrayOfNumber){ //for (<value_type> el of <arrary_name>) { ... }
  console.log(el);
}
// 1
// 2
// 3
// 4
// 5

//Ex. 1
const array = [1,2,3,4,5];
let suma = 0;
for (let el of array){ //for (<value_type> el of <arrary_name>) { ... }
  suma += el;
}
console.log(suma);