{
  // type guard using instance
  // Animal
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log(`${this.name} can make sound`);
    }
  }

  // Dog
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`${this.name} can bite`);
    }
  }

  // Dog
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log(`${this.name} can meu meuw`);
    }
  }

  const isDog = (animal: Animal): animal is Dog => {
    return Animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return Animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  // object
  const dog = new Dog("Dog bhai", "Dog");
  const cat = new Dog("bilay bhai", "Cat");
  getAnimal(dog);
  //
}
