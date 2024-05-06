{
  // inheritence
  // student class
  class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
    takeClass(numOfHours: number) {
      console.log(`${this.name} will take class for ${numOfHours} hr`);
    }
  }

  // student object
  const student1 = new Student("Masud rana", 21, "Dhaka");
  student1.getSleep(21);

  // teacher object
  const teacher1 = new Teacher(
    "Aminul islam",
    46,
    "Bashundhara",
    "Chairman of CSE"
  );
  teacher1.takeClass(7);

  // in above example we see that, student and teacher contains same properties in both. we can make another common class, then we can extends it

  console.log("below inheritance example...................");
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(hr: number) {
      console.log(`${this.name} will sleep for ${hr}`);
    }
  }

  // student class extends Person class
  class Student1 extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  // teacher class extends Person class
  class Teacher1 extends Person {
    // own property
    designation: string;
    // constructor
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    // method
    takeClass(numOfHours: number) {
      console.log(`${this.name} will take class for ${numOfHours} hr`);
    }
  }

  // instance of Student1 and Teacher1 class
  const st1 = new Student1("Masud Rana", 21, "Dhaka");
  st1.getSleep(6);
  const t1 = new Teacher1("Sagufta", 25, "Rangpur", "Lecturer");
  t1.getSleep(5);
  t1.takeClass(10);
  //
}
