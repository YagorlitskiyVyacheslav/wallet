import { API_URL } from "../../constants";
import { addTransaction, updateBalance } from "./transactionsActions";

const postTransactions = (userId, token, transaction) => {
  const url = `${API_URL}/api/finance/${userId}`;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  };
  fetch(url, options);
};

const getTransactions = (userId, token) => async (dispatch) => {
  const url = `${API_URL}/api/finance/${userId}`;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const responce = await fetch(url, options);
  const transaction = await responce.json();
  dispatch(addTransaction(transaction.finance.data));
  dispatch(updateBalance(transaction.finance.totalBalance));
};

const transactionOperations = {
  postTransactions,
  getTransactions,
};

export default transactionOperations;
