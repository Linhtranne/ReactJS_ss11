class bankAccount{
    protected accountNumber: number;
    protected balance: number;
    constructor(accountNumber: number, balance: number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(p0: number):void{
        this.balance += 1000000000;
    }
    withdraw():void{
        if(this.balance > 1000000000){
            this.balance -= 1000000000;
        }else{
            console.log('Có tiền đâu mà rút');
        }
    }
    protected getBalance(): number {
        return this.balance;
    }
}
class SavingsAccount extends bankAccount {
    private interestRate: number;
  
    constructor(accountNumber: number, balance: number, interestRate: number) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
    }
  
    calculateInterest(): number {
      return this.getBalance() * this.interestRate / 100;
    }
}
const savingsAccount = new SavingsAccount(188810102005, 100000000000000000000, 0.5);
const monthlyInterest = savingsAccount.calculateInterest();
console.log(`Tiền lãi hàng tháng: ${monthlyInterest}`);
savingsAccount.deposit(500000);
const newMonthlyInterest = savingsAccount.calculateInterest();
console.log(`Tiền lãi hàng tháng sau khi gửi thêm tiền: ${newMonthlyInterest}`);

  