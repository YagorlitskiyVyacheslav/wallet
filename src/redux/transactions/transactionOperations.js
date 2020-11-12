import { API_URL } from "../../constants";

export const postTransaction = (userId, token, transaction) => {
  const url = `${API_URL}/api/finance/${userId}`;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  };

  fetch(url, options).catch((error) => console.log(error));
};

export const getTransactions = async (userId, token) => {
  try {
    const url = `${API_URL}/api/finance/${userId}`;

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);

    const transactions = await response.json();

    return transactions.finance;
  } catch (error) {
    throw error;
  }
};

const transactionOperations = {
  postTransaction,
  getTransactions,
};

export default transactionOperations;
