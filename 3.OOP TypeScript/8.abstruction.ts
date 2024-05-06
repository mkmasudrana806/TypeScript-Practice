{
  // abstractioin: interface and abstract class
  // interface implements
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // car implements
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am starting the car engine`);
    }
    move(): void {
      console.log(`I am starting the car engine`);
    }
    test(): void {
      console.log(`I am just testing`);
    }
  }

  const car = new Car1();
  console.log(car.move());

  // abstract class,
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    abstract test(): void;
  }

  class ToyotaCar extends Car2 {
    stopEngine(): void {
      console.log("hello from toyota car");
    }
    move(): void {
      console.log("hello from toyota car");
    }
    test(): void {
      console.log("hello from toyota car");
    }
    startEngine(): void {}
  }

  const toyota = new ToyotaCar();
  toyota.move();

  //
}
