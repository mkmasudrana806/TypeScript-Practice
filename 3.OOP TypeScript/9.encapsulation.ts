{
  // encapsulation
  // private: allow access only in class. not outside of class or child or sub class.
  // protected: allow access in same class and sub class only. not outside of class

  class BankAccount {
    readonly id: number;
    public name: string;
    private balance: number;
    protected age: number;
    constructor(id: number, name: string, balance: number, age: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
      this.age = age;
    }
    public addDeposit(amount: number) {
      this.balance += amount;
    }
    public getBalance() {
      return this.balance;
    }
  }

  class Student extends BankAccount {
    show() {
      console.log(this.age);
    }
  }

  const gorib = new BankAccount(3243, "Masud Rana", 923, 21);
  console.log(gorib.getBalance());
  gorib.addDeposit(234);
  console.log(gorib.getBalance());

  const stu = new Student(324, "Shihab", 298, 17);
  stu.show();
  //
}
