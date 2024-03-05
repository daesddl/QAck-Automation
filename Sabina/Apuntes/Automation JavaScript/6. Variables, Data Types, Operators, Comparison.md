
VARIABLES
![[Pasted image 20240227220532.png]]

* Let
	* Declares a **block-scoped** local variable, optionally initializing it to a value.
* Var
	* Declares a **function-scoped** or **globally-scoped** variable, optionally initializing it to a value
* Const
	* Are **block-scoped**. The value of a constant can't be changed through reassignment, and it can't be redeclared However, if a constant is an object or array its properties or items can be updated or removed.

```JS
{
	let a = 6;
}
console.log(a);
//ERROR, variable a no declarada

{
	var b = 5;
}
console.log(b);
//NO ERRORS
```


PRIMITIVE DATA TYPES
* Primitive
	* Data that is not an object and has no methods or properties.
	1. String
		- Text values
		- Literals representation: 'Text', "Text"
		- Convert to string: ""+23, String(23), toString() 
	2. Number
		- Numerical values
		- Integer and float literals: 1, -1.2, 1e2
		- Convert to Number: + "123", Number("123"), parseInt(), parseFloat()
	3. Bigint
	4. Boolean
		- logical entity
		- True / False
		- Falsy values in JS: false, null, undefined, 0, NaN, '' (empty string), ""(empty string)
		- Not falsy: {}, []; 
		- Convert to boolean: !!value; Boolean(value)
	5. Undefined
		- Variables without any assigned value 
		- Type and value at the same type
	6. Symbol
	7. Null
		- Pointer to a non existing or invalid object
		- Type and value at the same type
```JS
const number = 4;
const string = 'Hello!';
const symb = Symbol();
const boolean = true;
const nullValue = null;
const a;
console.log(a); // undefined;
```

* Hoisting
	* Refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

COMPLEX DATA TYPE
1. Object
	- key-value pair 
	- Object literals: {}, {name: "Pavel"} 
	- Special object : Date; wrappers: Number, Map, JSON, Array
2. Array
	- The Array object, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
		- Are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
		- Are not associative arrays and so, array elements cannot be accessed using strings as indexes, but must be accessed using integers as indexes.
		- Are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on - and the last element is at the value of the array's length property minus 1.
		- Array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).


>[!Important]
>Diferencia entre los objetos y los datos primitivos:  Los objetos se almacenan y copian "por referencia", mientras que los valores primitivos se copian "como un valor entero".
>
>Una variable asignada a un objeto no almacena el objeto en sí, sino su "dirección en memoria", es decir, "una referencia" a él.


OPERATORS
* Assignment and Arithmetic operators
	* Assignment operators
		* Are used to assign values to JavaScript variables.
	* Arithmetic operators
		* Are used to perform arithmetic between variables and/or values.
* String concatenation
	* The + operator, and the += operator can also be used to concatenate (add) strings.


COMPARISON AND LOCAL OPERATORS
- Comparison Operators
	- Are used in logical statements to determine equality or difference between variables or values.
- Binary Logical Operators
	- Are used to determine the logic between variables or values.
- typeOf Operator
	- Returns the type of a variable, object, function or expression.