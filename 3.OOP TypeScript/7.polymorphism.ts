{
  // 4 properties:
  // 1. interface
  // 2. Inheritance
  // 3. Polymorphism: overriding
  // 4. Abstruction

  // polymorphism
  class Person {
    getSleep() {
      console.log(`Personsleeping for 8 hours per day`);
    }
  }

  // student class
  class Student extends Person {
    getSleep(): void {
      console.log(`Student sleeping for 7 hours per day`);
    }
  }

  // developer class
  class Developer extends Person {
    getSleep(): void {
      console.log(`developer sleeping for 6 hours per day`);
    }
  }

  const getSleppingHours = (person: Person) => {
    person.getSleep();
  };

  // make three object
  const person = new Person();
  const student = new Student();
  const developer = new Developer();
  // call
  getSleppingHours(person);
  getSleppingHours(student);
  getSleppingHours(developer);
  //

  // another example
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number ) {
      super();
      this.
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  //
}
