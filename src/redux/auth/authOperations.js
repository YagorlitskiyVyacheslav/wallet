import { API_URL } from "../../constants";
import { setUserData, setToken } from "./authActions";
import { updateState } from "../transactions/transactionsActions";

export const requestSingIn = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { token, user } = await response.json();

    dispatch(setToken(token));
    dispatch(setUserData(user));

    saveTokenToStorage({ token, user: JSON.stringify(user) });

    const getTransactions = await fetch(`${API_URL}/api/finance/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const transactions = await getTransactions.json();

    const { data, totalBalance } = transactions.finance;

    dispatch(updateState(data, totalBalance));
  } catch (error) {
    console.error(error);
  }
};

export const requestSingUp = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/register`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { token, user } = await response.json();

    dispatch(setToken(token));
    dispatch(setUserData(user));

    saveTokenToStorage({ token, user: JSON.stringify(user) });
  } catch (error) {
    console.error(error);
  }
};

export const getTokenFromStorage = () => (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    dispatch(setToken(token));
    dispatch(setUserData(user));
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  const token = "";
  const user = {};

  dispatch(setToken(token));
  dispatch(setUserData(user));
  dispatch(updateState([], 0));

  saveTokenToStorage({ token, user: JSON.stringify(user) });
};

export const saveTokenToStorage = ({ user, token }) => {
  localStorage.setItem("user", user);
  localStorage.setItem("token", token);
};
