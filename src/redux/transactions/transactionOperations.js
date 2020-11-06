import { API_URL } from "../../constants";

const userId = JSON.parse(localStorage.getItem("user")).id;
const token = localStorage.getItem("token");

const postTransactions = (transaction) => {
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

const getTransactions = () => {
  const url = `${API_URL}/api/finance/${userId}`;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  fetch(url, options)
    .then((responce) => responce.json())
    .then((data) => console.log(data.finance.data));
};

const transactionOperations = {
  postTransactions,
  getTransactions,
};

export default transactionOperations;
