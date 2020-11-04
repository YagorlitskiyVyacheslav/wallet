import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import style from './SignUp.module.css';
import walletIcon from '../../images/Authentication/walletIcon.png';
import { requestSingUp } from "../../redux/auth/authOperations";

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUserName] = useState("");

  const singUp = (event) => {
    event.preventDefault();
    dispatch(requestSingUp({ email, password, name }));
  };
    return (
      <div className={style.modal}>
        <div className={style.formContainer}>
          <div className={style.signUpLogoContainer}>
            <img src={walletIcon} alt="wallet" className={style.signUpLogo} />
            <h1>Wallet</h1>
          </div>
          <form className={style.formSignUp} onSubmit={singUp}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              className={style.signUpEmail}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              autoComplete="off"
              className={style.signUpPassword}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Подтвердите пароль"
              autoComplete="off"
              className={style.signUpPassword}
            />
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Ваше имя"
              className={style.signUpName}
              onChange={(event) => setUserName(event.target.value)}
            />

            <button className={style.signUpButton}>Регистрация</button>
          </form>
          <Link to="/login" className={style.link}>
            <p type="button" className={style.linkSignIn}>
              Войти
            </p>
          </Link>
        </div>
      </div>
    );
}

export default SignUp;
