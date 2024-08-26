class BankAccount {
    #balance
    #accountHolder
 
    constructor(accountHolder, balance) {
      this.#balance = balance += 0
      this.#accountHolder = accountHolder
    }
 
    deposit(amount) {
      this.#balance += amount
      console.log(`${this.#accountHolder} depositou R$${amount.toFixed(2)} | Saldo total: R$${this.#balance.toFixed(2)}`)
    }

 
    withdraw(amount) {
      if (this.#balance >= amount) {
        this.#balance -= amount
        console.log(`${this.#accountHolder} sacou R$${amount.toFixed(2)} | Saldo total: R$${this.#balance.toFixed(2)}`)
        return true
      } else {
        console.log(`Saldo insuficiente para ${this.#accountHolder}`)
        return false
      }
    }
 
    getBalance() {
      return this.#balance
    }
 
    getAccountHolder() {
      return this.#accountHolder
    }
  }
 
  module.exports = BankAccount