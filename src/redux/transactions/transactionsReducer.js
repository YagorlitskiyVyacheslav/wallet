import transactionsActionTypes from "./transactionsActionTypes";
import transactionOperations from "./transactionOperations";

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

      const userId = action.payload.transaction.userId;
      const token = action.payload.transaction.token;

      const newTransaction = {
        ...action.payload.transaction,
        balanceAfter,
        typeBalanceAfter,
      };

      transactionOperations.postTransactions(userId, token, newTransaction);

      return {
        items: [newTransaction, ...state.items],
        balance: balanceAfter,
      };

    case transactionsActionTypes.BALANCE:
      return {
        items: state.items,
        balance: action.payload.count,
      };

    default:
      return state;
  }
};

export default transactionsReducer;
