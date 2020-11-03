import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './SignUp.module.css';
import walletIcon from '../../images/Authentication/walletIcon.png';

class SignUp extends Component {
  render() {
    return (
      <div className={style.modal}>
        <div className={style.formContainer}>
          <div className={style.signUpLogoContainer}>
            <img src={walletIcon} alt="wallet" className={style.signUpLogo} />
            <h1>Wallet</h1>
          </div>
          <form className={style.formSignUp}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className={style.signUpEmail}
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              autoComplete="off"
              className={style.signUpPassword}
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
              placeholder="Ваше имя"
              className={style.signUpName}
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
}

export default SignUp;
