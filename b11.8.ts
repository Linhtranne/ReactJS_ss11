class CheckingAccount extends Account {
    private overdraftLimit: number;
  
    constructor(accountNumber: string, balance: number, overdraftLimit: number) {
      super(accountNumber, balance);
      this.overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount: number): void {
      if (amount > this.balance + this.overdraftLimit) {
        console.log("Số dư tài khoản không đủ");
        return;
      }
      this.balance -= amount;
    }
  }
  