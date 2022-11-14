const Account = require('./Account');

describe('Account', () => {
    it('returns account balance', () => {
        const account = new Account(0);
        expect(account.currentBalance()).toEqual(0);
    })

    it('deposits money to account', () => {
        const account = new Account(0);
        account.deposit(1000);
        expect(account.currentBalance()).toBe(1000);
    })

    it('withdraws money from account', () => {
        const account = new Account(1000);
        account.withdraw(1000);
        expect(account.currentBalance()).toBe(0);
    })
})