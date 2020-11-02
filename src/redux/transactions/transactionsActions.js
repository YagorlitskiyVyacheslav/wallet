import transactionsActionTypes from './transactionsActionTypes';

const addTransaction = transaction => ({
    type: transactionsActionTypes.ADD,
    payload: {
        transaction,
    },
});

const updateBalance = count => ({
    type: transactionsActionTypes.BALANCE,
    payload: {
        count,
    },
});

export default {
    addTransaction,
    updateBalance,
};
