class SavingsAccount {
    constructor(accountHolder, interestRate, initialBalance = 0) {
      this.accountHolder = accountHolder
      this.interestRate = interestRate
      this.balance = initialBalance
    }
 
    getBalance() {
      return this.balance
    }
 
    deposit(amount) {
      this.balance += amount
    }
 
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount
        console.log(`${this.accountHolder} sacou R$${amount.toFixed(2)} | Saldo total: R$${this.balance.toFixed(2)}`)
        return true
      } else {
        console.log(`Saldo insuficiente para ${this.accountHolder}`);
        return false
      }
    }
 
    getAccountHolder() {
      return this.accountHolder
    }
 
    applyInterest() {
      const interest = this.getBalance() * (this.interestRate / 100)
      this.deposit(interest)
      console.log(`Saldo total de ${this.getAccountHolder()}: R$${(this.getBalance() - interest).toFixed(2)} | Aplicado ${this.interestRate}% de juros`)
      console.log(`Novo saldo total: R$${this.getBalance().toFixed(2)}`)
    }
  }
 
  module.exports = SavingsAccount