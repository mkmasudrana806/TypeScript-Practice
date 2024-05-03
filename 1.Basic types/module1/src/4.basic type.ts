// Basic Data Types

// *************** Primitives Data Types ****************
// string
let firstName = "Masud Rana"; // typeScript implicitly define string data type

// explicit we define
let id: number = 213902101;

// boolean
let isAdmin = true;

// undefined
let car: undefined = undefined;

// null
let y: null = null;

// any
let user; // typescript implicitly detect it as any type. we can use anything in this variable.
// don't use any type

user = "Masud Rana";
user = [234, 234, 23];
user = true;

let d: number;
// d = "Masud Rana"; // Type 'string' is not assignable to type 'number'

// *************** Non-Primitives Data Types ****************
// number array
let numbers: number[] = [1, 3, 2, 10];

// numbers.push("Masud Rana"); // not possible string to a numbers array
// string array
let names: string[];

// tuple define order, 2 or more value possible in tuple
let ageName: [number, string] = [21, "Masud Rana"];
