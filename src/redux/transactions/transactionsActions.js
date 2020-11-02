import transactionsActionTypes from "./transactionsActionTypes";

export const addTransaction = (transaction) => ({
  type: transactionsActionTypes.ADD,
  payload: {
    transaction,
  },
});

export const updateBalance = (count) => ({
  type: transactionsActionTypes.BALANCE,
  payload: {
    count,
  },
});
