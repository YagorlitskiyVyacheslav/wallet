import { API_URL } from "../../constants";

const postTransactions = (transaction) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const url = `${API_URL}/api/finance/${user.id}`;

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


const getTransactions = (user, token) => {
  const url = `${API_URL}/api/finance/${user.id}`;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  return fetch(url, options)
    .then((responce) => responce.json())
    .then((data) => {
      return data.finance;
    });
};

const transactionOperations = {
  postTransactions,
  getTransactions,
};

export default transactionOperations;