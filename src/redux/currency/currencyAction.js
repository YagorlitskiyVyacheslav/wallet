import { SET_CURRENCY_EXCHANGE } from "./currencyActionTypes";

export const setCurrencyExchange = (payload) => ({
  type: SET_CURRENCY_EXCHANGE,
  payload,
});
