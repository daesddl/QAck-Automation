/**
 * Materials:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

/**
 * create variable named int and set value equal to 1
 */
let int = 1;

/**
 *  create variable named int2 and set value equal int plus 1
 */
let int2 = int + 1;

/**
 * create variable named str and set value equal to "John"
 */
let str = "John";

/**
 * create variable named str2 and set value equal str plus " Dou"
 */
let str2 = str + " Dou";

/**
 * create variable named bool and set value of equality comparison of int and int2 variables
 */
let bool = (int == int2);

/**
 * create variable named arr and set value array of numbers from 1 to 5
 */
let arr = [1, 2, 3, 4, 5];

/**
 * create variable named fifth and set value as element of array with index 4
 */
let fifth = arr[4];

/**
 * create variable named human and set value as object with key firstName and value "John"
 */
let human = {
  firstName: 'John',
};

/**
 * set new key of human object named lastName and value "Dou"
 */
human.lastName = "Dou";

/**
 * set new key of human object named fullName and value of concatenation of firstName and lastName values
 */
human.fullName = human.firstName + human.lastName;