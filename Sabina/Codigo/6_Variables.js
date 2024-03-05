//LET
//Ex. 1
let a = "Estoy Afuera"
{
    const a = false;
    console.log(a)
}
console.log(a); //ERROR, a not defined


//VAR
//Ex. 1
var b = "Estoy Afuera"
{
    var b = "Estoy Adentro";
}
console.log(b); //All good

//Ex. 2
function func(){
    var c = 7;
    console.log(c);
}
//console.log(c); //ERROR, c not defined because is inside a function, we need to call the function
func(); //Calling the function

//Ex. 3
console.log(x);
console.log(y);
let x = 10;
var y = 9;
//ERROR, we can't show values that are not defined yet, becase the execution is secuential

//Ex. 4
console.log(z);
var z = 9;
//UNDEFINED, not error but undefined because the var variable has not been defined


//CONST
//Ex. 1
const i = 1;
console.log(i);
//All good

//Ex. 2
{
    const j = 1;
}
console.log(j);
//ERROR, j is not defined

//Ex. 3
{
    const k = 1;
    console.log(j);
}
// All good

//Ex. 4
{
    const l = 1;
    l = 2;
    console.log(l);
}
//ERROR, we can't reasign value to the cons variable
