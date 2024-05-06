{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    private balance: number;
    protected age: number;
    constructor(id: number, name: string, balance: number, age: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
      this.age = age;
    }
    addDeposit(amount: number) {
      this.balance = amount;
    }
    getBalance() {
      return this.balance;
    }

    // getter and setter
    get Balance() {
      return this.balance;
    }

    get Name() {
      return this.name;
    }
  }

  class StudentAccount extends BankAccount {
    constructor(id: number, name: string, balance: number, age: number) {
      super(id, name, balance, age);
    }
    studentAgeCheck() {
      console.log(this.age);
    }
  }
  const goribManusherAccount = new BankAccount(23432, "Masud Rana", 324324, 21);
  const balance = goribManusherAccount.getBalance();
  console.log(balance);
  const stu = new StudentAccount(98324, "Shihab", 324, 17);
  // access getter
  console.log('balance is', stu.Balance);
  
  //
}
