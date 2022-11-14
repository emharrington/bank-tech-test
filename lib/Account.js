class Account {
    constructor(balance) {
        this.balance = balance;
    }

    currentBalance() {
        return this.balance;
    }
}

module.exports = Account;