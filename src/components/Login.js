import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          log in
        </button>
      </form>
      <p className="login-footer">
        Don't have an account? <span className="signup-link">Sign up</span>
      </p>
    </div>
  );
}

export default Login;



