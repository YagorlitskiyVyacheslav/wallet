import { addCurrencyExchange } from './currencyActionTypes';

const currencyReducer = (state = [], action) => {
    switch (action.type) {
        case addCurrencyExchange:
            return action.payload;
        default: 
        return state;
    }
}

export default currencyReducer;