import transactionsActionTypes from "./transactionsActionTypes";

export const addTransaction = (transaction) => ({
  type: transactionsActionTypes.ADD,
  payload: {
    transaction,
  },
});

export const updateState = (items, balance) => ({
  type: transactionsActionTypes.UPDATE_STATE,
  payload: {
    items,
    balance,
  },
});
