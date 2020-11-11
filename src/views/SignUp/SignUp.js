import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {defaults} from '@pnotify/core';
import {requestSingUp} from '../../redux/auth/authOperations';
import {useForm} from 'react-hook-form';
import {info, defaultModules} from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import PasswordStrengthMeter from './PasswordMeter/PasswordStrengthMeter';
import walletIcon from '../../images/Authentication/walletIcon.png';
import iPhoneIMG from '../../images/Authentication/iPhone-registration-desktop.png';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import css from '../SignIn/Authentication.module.css';
import style from './SignUp.module.css';

defaults.width = '350px';
defaults.delay = 2000;
defaultModules.set(PNotifyMobile, {});

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setUserName] = useState('');
  const [confirmPassword, setConfirmPasword] = useState('');
  const {register, handleSubmit, errors} = useForm();
  const OnSubmit = (data) => {
    if (password === confirmPassword) {
      dispatch(requestSingUp({email, password, name}));
    } else {
      info({
        text: 'Пароли не совпадают',
      });
    }
  };

  return (
    <div className={style.modal}>
       <div className={css.iPhoneContainer}>
        <img src={iPhoneIMG} alt="iPhone" className={css.iPhoneIMG}></img> 
        <p className={css.financeApp}>Finance App</p>
      </div>
      <div className={style.formContainer}>
        <div className={css.authenticationLogoContainer}>
          <img
            src={walletIcon}
            alt="wallet"
            className={css.authenticationLogo}
          />
          <h1>Wallet</h1>
        </div>
        <form
          className={css.authenticationForm}
          onSubmit={handleSubmit(OnSubmit)}>
          <label className={css.label}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              ref={register({required: true})}
              className={`${css.authenticationEmail} ${css.inputValidation}`}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && (
              <p className={css.authenticationError}>Введите E-mail.</p>
            )}
          </label>
          <label className={css.label}>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              ref={register({required: true})}
              autoComplete="off"
              className={css.authenticationPassword}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && (
              <p className={css.authenticationError}>Введите пароль.</p>
            )}
          </label>
          <PasswordStrengthMeter password={password} />
          <label className={css.label}>
            <input
              type="password"
              name="passwordConfirm"
              value={confirmPassword}
              ref={register({required: true})}
              placeholder="Подтвердите пароль"
              autoComplete="off"
              className={css.authenticationPassword}
              onChange={(event) => setConfirmPasword(event.target.value)}
            />
            {errors.passwordConfirm && (
              <p className={css.authenticationError}>Подтвердите пароль.</p>
            )}
          </label>
          <label className={css.label}>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Ваше имя"
              ref={register({required: true})}
              className={css.authenticationName}
              onChange={(event) => setUserName(event.target.value)}
            />
            {errors.name && (
              <p className={css.authenticationError}>Введите имя.</p>
            )}
          </label>
          <button className={css.authenticationButton}>Регистрация</button>
        </form>
        <Link to="/login" className={css.link}>
          <p type="button" className={style.linkSignIn}>
            Войти
          </p>
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
