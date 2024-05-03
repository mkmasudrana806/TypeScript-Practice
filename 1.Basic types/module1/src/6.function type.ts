// normal function parameter type and return type
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(10, 20));

// arrow function parameter type and return type
const mul = (num1: number, num2: number): number => num1 * num2;

// method inside an object type and return type
const poorUser = {
  name: "Masud Rana",
  balance: 0,
  addBalance(balance: number): string {
    return `My balance is: ${this.balance + balance}`;
  },
};

// type for callback in map
const arr: number[] = [2, 5, 9, 1];
const newArr: number[] = arr.map((elm: number): number => elm * 2);

/**
*can not re-declare block scope variable solution.
as we have not use node or express module system. so typescript make all the variable global.

two solution: use { intire code} in each ts file
or export {} in each ts file at last
*/
