const Account = require('./Account');

describe('Account', () => {
    const account = new Account(0);

    it('returns account balance', () => {
        expect(account.currentBalance()).toEqual(0);
    })
})