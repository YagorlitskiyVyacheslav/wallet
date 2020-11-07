import { API_URL } from "../../constants";

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const postTransactions = (transaction) => {
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

const getTransactions = () => {
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
      console.log(data.finance);
      return data.finance;
    });
};

const transactionOperations = {
  postTransactions,
  getTransactions,
};

export default transactionOperations;

// import { API_URL } from "../../constants";

// const user = JSON.parse(localStorage.getItem("user"));
// const token = localStorage.getItem("token");

// const postTransactions = (userId, token, transaction) => {
//   const url = `${API_URL}/api/finance/${userId}`;

//   const options = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(transaction),
//   };
//   fetch(url, options);
// };

// const getTransactions = (userId, token) => {
//   const url = `${API_URL}/api/finance/${userId}`;

//   const options = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   };
//   return fetch(url, options)
//     .then((responce) => responce.json())
//     .then((data) => {
//       console.log(data.finance);
//       return data.finance;
//     });
// };

// const transactionOperations = {
//   postTransactions,
//   getTransactions,
// };

// export default transactionOperations;
