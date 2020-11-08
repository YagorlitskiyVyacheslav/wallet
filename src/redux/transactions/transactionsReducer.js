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

      // const typeBalanceAfter = balanceAfter > 0 ? "+" : "-";

      // const balanceAfterCorrect =
      //   balanceAfter > 0 ? balanceAfter : String(balanceAfter).substring(1);

      const newTransaction = {
        ...action.payload.transaction,
        // balanceAfter: balanceAfterCorrect,
        // typeBalanceAfter,
        balanceAfter,
      };

      transactionOperations.postTransactions(newTransaction);

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
