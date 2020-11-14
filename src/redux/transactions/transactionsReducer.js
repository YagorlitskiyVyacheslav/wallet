import {
  SET_TRANSACTIONS,
  SET_BALANCE,
  SET_FILTER,
} from "./transactionsActionTypes";

const initialState = {
  items: [],
  balance: 0,
  filter: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return { ...state, items: action.payload };
    case SET_BALANCE:
      return { ...state, balance: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default reducer;
