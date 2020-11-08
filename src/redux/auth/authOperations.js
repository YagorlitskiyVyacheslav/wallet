// import React, {Component} from 'react';
import {API_URL} from '../../constants';
import {setUserData, setToken} from './authActions';
import {info, defaultModules} from '@pnotify/core';
// import PNotify from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import {defaults} from '@pnotify/core';

defaults.width = '350px';
defaults.delay = 2000;
defaultModules.set(PNotifyMobile, {});

export const requestSingIn = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {token, user} = await response.json();
    dispatch(setToken(token));
    dispatch(setUserData(user));
    if (user === false) {
      info({
        text: 'Неверный E-mail или пароль.',
      });
    }

    saveTokenToStorage({token, user: JSON.stringify(user)});
  } catch (error) {
    console.error(error);
  }
};

export const requestSingUp = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/register`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {token, user} = await response.json();

    dispatch(setToken(token));
    dispatch(setUserData(user));
    saveTokenToStorage({token, user: JSON.stringify(user)});
    if (response.status === 400) {
      info({
        text: 'Такой E-mail уже существует!',
      });
    }else{
      info({
        text: 'Регистрация успешна!',
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getTokenFromStorage = () => (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    dispatch(setToken(token));
    dispatch(setUserData(user));
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  const token = '';
  const user = {};

  dispatch(setToken(token));
  dispatch(setUserData(user));

  saveTokenToStorage({token, user: JSON.stringify(user)});
};

export const saveTokenToStorage = ({user, token}) => {
  localStorage.setItem('user', user);
  localStorage.setItem('token', token);
};
