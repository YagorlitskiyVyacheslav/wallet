import { combineReducers } from "redux";
import transactionsReducer from "./transactions/transactionsReducer";
import authReducer from "./auth/authReducer";

export default combineReducers({
  auth: authReducer,
  transactions: transactionsReducer,
});
