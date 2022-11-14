class Account {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(money) {
        this.balance += money;   
    }

    currentBalance() {
        return this.balance;
    }
}

module.exports = Account;