import { API_URL } from '../../constants';

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import { defaults } from "@pnotify/core";
import { info, defaultModules } from "@pnotify/core";

import { setUserData, setToken } from './authActions';
import { updateState } from '../transactions/transactionsActions';
import transactionOperations from '../transactions/transactionOperations';

defaults.width = '350px';
defaults.delay = 2000;
defaultModules.set(PNotifyMobile, {});

export const requestSingIn = payload => async dispatch => {
    try {
        const response = await fetch(`${API_URL}/api/login`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const { token, user } = await response.json();
        if (!user) {
          info({
            text: "Неверный E-mail или пароль.",
          });
        }
        dispatch(setToken(token));
        dispatch(setUserData(user));

        saveTokenToStorage({ token, user: JSON.stringify(user) });
        const transactions = await transactionOperations.getTransactions(
            user.id,
            token,
        );

        const { data, totalBalance } = transactions;

        dispatch(updateState(data, totalBalance));
    } catch (error) {
        console.error(error);
    }
};

export const requestSingUp = payload => async dispatch => {
    try {
        const response = await fetch(`${API_URL}/api/register`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const { token, user } = await response.json();
        if (response.status === 400) {
          info({
            text: "Такой E-mail уже существует!",
          });
        } else {
          info({
            text: "Регистрация успешна!",
          });
        }
        dispatch(setToken(token));
        dispatch(setUserData(user));

        saveTokenToStorage({ token, user: JSON.stringify(user) });
    } catch (error) {
        console.error(error);
    }
};

export const getTokenFromStorage = () => dispatch => {
    try {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        dispatch(setToken(token));
        dispatch(setUserData(user));

        transactionOperations
            .getTransactions(user.id, token)
            .then(transactions =>
                dispatch(
                    updateState(transactions.data, transactions.totalBalance),
                ),
            )
            .catch(error => console.log(error));
    } catch (error) {
        console.log(error);
    }
};

export const logout = () => dispatch => {
    const token = '';
    const user = {};

    dispatch(setToken(token));
    dispatch(setUserData(user));
    dispatch(updateState([], 0));

    saveTokenToStorage({ token, user: JSON.stringify(user) });
};

export const saveTokenToStorage = ({ user, token }) => {
    localStorage.setItem('user', user);
    localStorage.setItem('token', token);
};
