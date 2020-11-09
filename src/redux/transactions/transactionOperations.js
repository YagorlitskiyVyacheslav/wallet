import { API_URL } from "../../constants";

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
  fetch(url, options).catch((error) => console.log(error));
};

const getTransactions = (userId, token) => {
  const url = `${API_URL}/api/finance/${userId}`;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  return fetch(url, options)
    .then((responce) => responce.json())
    .then((data) => data.finance)
    .catch((error) => console.log(error));
};

const transactionOperations = {
  postTransactions,
  getTransactions,
};

export default transactionOperations;
