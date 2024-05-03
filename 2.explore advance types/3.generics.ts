// generics means generalize type

// simple number array
const numbers: number[] = [2, 1, 9, 8, 3];
// generics array
const nums: Array<number> = [32, 9, 59, 2];

// simple string array
const names: string[] = ["masud", "rana", "sheikh"];
const str: Array<string> = ["shamoli", "rahman", "soton"];

// generics
type GenericsArray<T> = Array<T>;

const number: GenericsArray<number> = [1, 2, 23, 9];
const strs: GenericsArray<string> = ["shihab", "rana"];

// generics in object
const usre: GenericsArray<{ name: string; age: number }> = [
  {
    name: "Mezba",
    age: 100,
  },
  {
    name: "Jhanker Mahbub",
    age: 160,
  },
];

// generic tuple
type GenericTuple<X, Y> = [X, Y];

const manush: [string, string] = ["masud", "soton"];
const manus: GenericTuple<string, string> = ["masud", "soton"];

const userWithId: GenericTuple<number, { name: string; email: string }> = [
  213,
  { name: "Masud Rana", email: "masud@gmail.com" },
];


