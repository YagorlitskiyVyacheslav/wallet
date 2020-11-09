import { API_URL } from "../../constants";

const postTransaction = (userId, token, transaction) => {
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

export default postTransaction;
