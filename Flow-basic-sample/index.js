// @flow

// Flow implies first parameter is a string. It shows error as arithmetic operation is performed on string 
console.log(((number1, number2) => number1 * number2)('Im String',20));

let isItCool:boolean; // declare a variable
isItCool = "test"; // Shows error as string is attempted to be assigned to a boolean type

// Types are defined on parameters, making developer intent clear.
console.log(((number1: number, number2: number) => number1 * number2)('Im String',20));

// defining return type checks return value.
((number1, number2):number => number1 + number2)('10',20);
