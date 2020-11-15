import { SET_CURRENCY_EXCHANGE } from "./currencyActionTypes";

const initialState = [];

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY_EXCHANGE:
      return action.payload;
    default:
      return state;
  }
};

export default currencyReducer;
