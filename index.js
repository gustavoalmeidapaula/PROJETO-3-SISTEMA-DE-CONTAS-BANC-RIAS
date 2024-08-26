const BankAccount = require('./BankAccount')
const SavingsAccount = require('./SavingsAccount')

const contaCorrente = new BankAccount('John', 1000.00)
const contaPoupanca = new SavingsAccount('Mary', 1.5, 2000)

contaCorrente.deposit(500)
contaCorrente.withdraw(300)
console.log('========================================================')

contaPoupanca.applyInterest()
contaPoupanca.withdraw(500)