import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { requestSingIn } from "../../redux/auth/authOperations";
import walletIcon from '../../images/Authentication/walletIcon.png';
import style from './SignIn.module.css';

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const singIn = (event) => {
    event.preventDefault();

    dispatch(requestSingIn({ email, password }))
  }

    return (
      <div className={style.modal}>
        <div className={style.formContainer}>
          <div className={style.signInLogoContainer}>
            <img src={walletIcon} alt="Wallet" className={style.signInLogo} />
            <h1>Wallet</h1>
          </div>

          <form className={style.formSignIn} onSubmit={singIn}>
            <input
              value={email}
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
              className={style.signInEmail}
            />
            <input
              value={password}
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={(event) => setPassword(event.target.value)}
              className={style.signInPassword}
            />
            <button
              type="submit"
              className={style.signInButton}>
              Войти
            </button>
          </form>
          <Link to="/registration" className={style.link}>
            <p className={style.linkSignUp}>
              Регистрация
            </p>
          </Link>
        </div>
      </div>
    );
  }

export default SignIn;
