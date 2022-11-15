const Account = require('./Account');
const Format = require('./Format');

class Transaction {
    constructor(format = new Format()) {
        //this.credit = credit,
        //this.debit = debit,
        //this.balance = balance,
        this.date = new Date(),
        this.format = format
    }

    tDate() {
        return this.format.date(this.date);
    }

    tDeposit(amount) {
        return amount;
    }
}

module.exports = Transaction;

//{credit = null, debit = null, balance = null}
//.moment().format('l')