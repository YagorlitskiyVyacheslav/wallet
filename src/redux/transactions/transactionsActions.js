import { SET_TRANSACTIONS, SET_BALANCE } from "./transactionsActionTypes";

export const setTransactions = (payload) => ({
  type: SET_TRANSACTIONS,
  payload
});
export const setBalance = (payload) => ({
  type: SET_BALANCE,
  payload,
})
