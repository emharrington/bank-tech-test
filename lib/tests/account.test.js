const Account = require('../Account');

describe('Account', () => {
    it('returns account balance', () => {
        const account = new Account();
        expect(account.currentBalance()).toEqual(0);
    })

    it('deposits money to account', () => {
        const account = new Account();
        account.deposit(1000);
        expect(account.currentBalance()).toBe(1000);
    })

    it('withdraws money from account', () => {
        const account = new Account();
        account.withdraw(1000);
        expect(account.currentBalance()).toBe(-1000);
    })

    xit('returns transaction after deposit', () => {
        const account = new Account();
        account.deposit(1000);
        expect(account.transaction()).toBe('credit: 1000, balance: 1000');
    })
    
    //it('returns date of transaction', () => {
    //    
    //})
})