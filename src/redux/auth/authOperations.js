import { API_URL } from "../../constants";
import { setUserData, setToken } from "./authActions";

export const requestSingIn = (payload) => async (dispatch) => {
    console.log(payload);
    console.log(dispatch);
    try {
        const response = await fetch(`${API_URL}/api/login`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const { token, user } = await response.json();
        dispatch(setToken(token));
        dispatch(setUserData(user));
    } catch (error) {
        console.error(error);
    }
}
export const requestSingUp = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/register`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { user } = await response.json();
    dispatch(setUserData(user));
  } catch (error) {
    console.error(error);
  }
};
export const saveTokenToStorage = (payload) => (dispatch) => {

}
export const getTokenFromStorage = (payload) => (dispatch) => {
    // Получили дані із локал сторедж
    const token = '';

    dispatch(setToken(token));
}
export const deleteTokenFromStorage = (payload) => (dispatch) => {}

