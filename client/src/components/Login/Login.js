import React from "react";
import { Link, useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 ">
          <h2>Login Form</h2>
          <form className="login">
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email-input"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="password-input"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-default">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
