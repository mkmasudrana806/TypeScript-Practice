// type
type User1 = {
  name: string;
  age: number;
};

// interface
interface User2 {
  name: string;
  age: number;
}

// use interface in object
const user1: User2 = {
  name: "Masud Rana",
  age: 23,
};

// interface is not used with primitive data types
type rollNumber = number;

// interface extends
interface UserWithRoll extends User2 {
  roll: number;
}

const users: UserWithRoll = {
  name: "Masud Rana",
  age: 21,
  roll: 21390,
};

// type intersection
type UserWithRoll2 = User1 & { roll: number };

const user3: UserWithRoll2 = {
  name: "Masud Rana",
  age: 21,
  roll: 213,
};

// type and interface in an array
type Roll1 = number[];
const nums: Roll1 = [32, 2, 5];

interface Roll2 {
  [index: number]: number;
}
const numbers: Roll2 = [324, 2, 2, 9];

// type and interface in a function
type Add = (num1: number, num2: number) => number;
interface Add2 {
  (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => num1 + num2;
const add2: Add2 = (num1, num2) => num1 + num2;

