{
  // static property or method connect with class. not instance variable.

  class Counter {
    count: number = 0;
    static staticCounter = 0;
    increment() {
      return (this.count = this.count + 1);
    }
    decrement() {
      return (this.count = this.count - 1);
    }

    incrementStatic() {
      return (Counter.staticCounter = Counter.staticCounter + 1);
    }
    decrementStatic() {
      return (Counter.staticCounter = Counter.staticCounter - 1);
    }
  }

  // count variable manage own memeory as it is not class member.
  const obj = new Counter();
  console.log(obj.increment()); // 1
  console.log(obj.increment()); // 1

  const obj2 = new Counter();
  console.log(obj2.increment()); // 1
  console.log(obj2.increment()); // 1

  // staticCounter manage class memory, it connected with class
  console.log('below for static variable');
  const staticObj = new Counter();
  console.log(staticObj.incrementStatic());
  console.log(staticObj.incrementStatic());
  console.log(staticObj.incrementStatic());

  const staticObj2 =  new Counter();
  console.log(staticObj2.incrementStatic());
  console.log(staticObj2.incrementStatic());
  console.log(staticObj2.incrementStatic());
  console.log(staticObj2.incrementStatic());
  //
}
