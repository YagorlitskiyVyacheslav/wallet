import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './SignIn.module.css';
import walletIcon from '../../images/Authentication/walletIcon.png';
class SignIn extends Component {
  render() {
    return (
      <div className={style.modal}>
        <div className={style.formContainer}>
          <div className={style.signInLogoContainer}>
            <img src={walletIcon} alt="Wallet" className={style.signInLogo} />
            <h1>Wallet</h1>
          </div>

          <form className={style.formSignIn}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className={style.signInEmail}
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              className={style.signInPassword}
            />
            <button
              type="submit"
              className={style.signInButton}>
              Войти
            </button>
          </form>
          <Link to="/registration" className={style.link}>
            <p
              type="button"
              className={style.linkSignUp}>
              Регистрация
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
