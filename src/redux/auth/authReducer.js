import { SET_TOKEN, SET_USER_DATA } from "./authTypes";

const initialState = {
  token: "",
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_USER_DATA:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
