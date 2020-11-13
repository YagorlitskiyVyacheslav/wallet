import { SET_TRANSACTIONS, SET_BALANCE } from "./transactionsActionTypes";

const initialState = {
  items: [],
  balance: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return { ...state, items: action.payload };
    case SET_BALANCE:
      return { ...state, balance: action.payload };
    default:
      return state;
  }
}

export default reducer;
