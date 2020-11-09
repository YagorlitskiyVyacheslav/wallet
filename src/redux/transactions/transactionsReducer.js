import transactionsActionTypes from "./transactionsActionTypes";
import postTransaction from "./transactionOperations";

const transactionsReducer = (
  state = {
    items: [],
    balance: 0,
  },
  action
) => {
  switch (action.type) {
    case transactionsActionTypes.ADD:
      const count = Number(
        action.payload.transaction.type + action.payload.transaction.amount
      );

      const balanceAfter = state.balance + count;

      const typeBalanceAfter = balanceAfter > 0 ? "+" : "-";

      const newTransaction = {
        ...action.payload.transaction,
        typeBalanceAfter,
        balanceAfter,
      };

      const { userId, token } = newTransaction;

      postTransaction(userId, token, newTransaction);

      return {
        items: [...state.items, newTransaction],
        balance: balanceAfter,
      };

    case transactionsActionTypes.UPDATE_STATE:
      return {
        items: action.payload.items,
        balance: action.payload.balance,
      };

    default:
      return state;
  }
};

export default transactionsReducer;
