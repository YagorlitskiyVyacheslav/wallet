import { addCurrencyExchange } from './currencyActionTypes';

export const getCurrencyExchange = (payload) => ({
    type: addCurrencyExchange,
    payload,
});