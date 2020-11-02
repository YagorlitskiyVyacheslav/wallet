import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SignUp extends Component {
  render() {
    return (
        <div>
          <div>
            <img src="" alt="wallet"/>
            <h1>Wallet</h1>
          </div>
          <form>
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
            />
            <input
              type="password"
              name="password"
              placeholder="Password*"
              autoComplete="off"
            />
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm password*"
              autoComplete="off"
            />
            <input
              type="text"
              name="name"
              placeholder="Name*"
            />
         
            <button>
              Sign up
            </button>
          </form>
          <Link to="/signin">
            <p>Sign in</p>
          </Link>
        </div>
    );
  }
}

export default SignUp;