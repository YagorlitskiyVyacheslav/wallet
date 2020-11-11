import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {requestSingIn} from '../../redux/auth/authOperations';
import walletIcon from '../../images/Authentication/walletIcon.png';
import iPhoneIMG from '../../images/Authentication/iPhone-login-desktop.png';
import css from './Authentication.module.css';
import style from './SignIn.module.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register, handleSubmit, errors} = useForm();
  const OnSubmit = (data) => {
    dispatch(requestSingIn({email, password}));
  };

  return (
    <div className={style.modal}>
      <div className={css.iPhoneContainer}>
        <img src={iPhoneIMG} alt="iPhone" className={css.iPhoneIMG}></img>
        <p className={css.financeApp}>Finance App</p>
      </div>
      <div className={css.formContainer}>
        <div className={css.authenticationLogoContainer}>
          <img
            src={walletIcon}
            alt="Wallet"
            className={css.authenticationLogo}
          />
          <h1 className={css.authenticationLogoName}>Wallet</h1>
        </div>

        <form
          className={css.authenticationForm}
          onSubmit={handleSubmit(OnSubmit)}>
          {
            <label className={css.label}>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={(event) => setEmail(event.target.value)}
                className={`${css.authenticationEmail} ${css.inputValidation}`}
                value={email}
                ref={register({required: true})}
              />
              {errors.email && (
                <p className={css.authenticationError}>Введите E-mail.</p>
              )}
            </label>
          }
          <label className={css.label}>
            <input
              value={password}
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={(event) => setPassword(event.target.value)}
              className={css.authenticationPassword}
              ref={register({required: true})}
            />
            {errors.password && (
              <p className={css.authenticationError}>Введите пароль.</p>
            )}
          </label>
          <button type="submit" className={css.authenticationButton}>
            Войти
          </button>
        </form>
        <Link to="/registration" className={css.link}>
          <p className={style.linkSignUp}>Регистрация</p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
