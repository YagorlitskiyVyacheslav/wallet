import { SET_USER_DATA, SET_TOKEN } from "./authTypes";

export const setToken = (payload) => ({
  type: SET_TOKEN,
  payload,
});

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});
