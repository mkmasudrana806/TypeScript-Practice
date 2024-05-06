{
  // class
  class Animal {
    // properties
    // name: string;
    // species: string;
    // sound: string;

    // constructor
    // constructor(name: string, species: string, sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    // }

    // parameter constructor, make parameter as public, no need to write class level properties

    constructor(public age: number, public color: string) {}
    // method. Note: arrow function doesn't support this keyword to access class properties
    makeSound() {
      console.log(`The ${this.age} says ${this.color}`);
    }
  }

  //   const dog = new Animal("German Shepard Bhai", "dog", "Ghew ghew");
  //   console.log(dog.name);
  const cat = new Animal(4, "white");
  console.log(cat);
  cat.makeSound();
  //
}
