class Account {
    constructor() {
        const startingBalance = 0;

        this.balance = startingBalance;
    }

    deposit(add) {
        this.balance += add;
    }

    withdraw(minus) {
        this.balance -= minus;
    }

    currentBalance() {
        return this.balance;
    }
}

module.exports = Account;