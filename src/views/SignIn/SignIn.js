import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SignIn extends Component {
    render() {
    return (
      
        <div>
          <div>
            <img src="" alt="Wallet"/>
            <h1>Wallet</h1>
          </div>

          <form>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <input
              type="password"
              name="password"
              placeholder="Password*"
            />
            <button type="submit">
              Sign in
            </button>
          </form>
          <Link to="/registration" >
            <h2 type="button">
              Sign up
            </h2>
          </Link>
        </div>

    );
    }; };

export default SignIn;
