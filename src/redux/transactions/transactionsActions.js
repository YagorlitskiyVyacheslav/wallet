import {
  SET_TRANSACTIONS,
  SET_OUT_TRANSACTIONS,
  SET_BALANCE,
  SET_FILTER,
} from './transactionsActionTypes';

export const setTransactions = payload => ({
  type: SET_TRANSACTIONS,
  payload,
});
export const setOutTransactions = () => ({
  type: SET_OUT_TRANSACTIONS,
});
export const setBalance = payload => ({
  type: SET_BALANCE,
  payload,
});
export const setFilter = payload => ({
  type: SET_FILTER,
  payload,
});
