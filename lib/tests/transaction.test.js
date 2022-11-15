const Transaction = require('../Transaction');

describe('Transaction', () => {
    it('returns transaction for deposit', () => {
        const transaction = new Transaction();
        const mockDate = {
            tDate: () => "15/11/2022"
          }
        expect(mockDate.tDate()).toEqual("15/11/2022"); //not sure if this is correct! need to come back to check
        expect(transaction.tDeposit(1000)).toEqual(1000);
    })
})