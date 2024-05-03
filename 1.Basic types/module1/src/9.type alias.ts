// Type Alias
{
  // const student1: {
  //   name: string;
  //   age: number;
  //   gender: string;
  //   contactNo: string;
  //   address: string;
  // } = {
  //   name: "Masud Rana",
  //   age: 21,
  //   gender: "male",
  //   contactNo: "01792852446",
  //   address: "Rajshahi",
  // };

  // const student2: {
  //   name: string;
  //   age: number;
  //   gender: string;
  //   address: string;
  // } = {
  //   name: "Shamoli Rahman",
  //   age: 19,
  //   gender: "female",
  //   address: "Rangpur",
  // };

  // const student3: {
  //   name: string;
  //   age: number;
  //   gender: string;
  //   address: string;
  // } = {
  //   name: "Shihan Rana",
  //   age: 17,
  //   gender: "male",
  //   address: "Rajshahi",
  // };

  // in above most property are same, it requires each object type defination. we can make a type with alias then we can use here.

  // object type alias
  // type declaration for student type
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Masud Rana",
    age: 21,
    gender: "male",
    contactNo: "01792852446",
    address: "Rajshahi",
  };

  const student2: Student = {
    name: "Shamoli Rahman",
    age: 19,
    gender: "female",
    address: "Rangpur",
  };

  const student3: Student = {
    name: "Shihan Rana",
    age: 17,
    gender: "male",
    address: "Rajshahi",
  };

  // string
  type UserName = string;

  // boolean
  type IsAdmin = boolean;

  const userName: UserName = "Masud Rana";
  const admin: IsAdmin = true;

  // function type alias
  type Add = (num1: number, num2: number) => number;
  const add: Add = (a, b) => a + b;
}
