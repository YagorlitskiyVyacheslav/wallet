export const isAuthenticateSelector = state => Boolean(state.auth.token);
export const userDataSelector = state => state.auth.user;
