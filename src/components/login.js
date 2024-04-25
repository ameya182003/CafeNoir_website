import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/blog", {
        email,
        password
      });

      if (response.data === "exist") {
        history("/blog", { state: { id: email } });
      } else if (response.data === "notexist") {
        setError("User does not exist");
      } else {
        setError("Unexpected response from the server");
      }
    } catch (e) {
      setError("An error occurred while processing your request");
      console.log(e);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="box">
          <div className="col-lg-12">
            <div className="alert alert-danger">
              <strong>You must be logged in to view the blog.</strong>
            </div>

            <h2 className="intro-text text-center">
              <strong>Login</strong>
            </h2>

            <form onSubmit={submit} action='POST'>
              <div className="row">
                <div className="form-group col-lg-4">
                  <label>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    maxLength="255"
                    className="form-control"
                    onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                </div>
                <div className="clearfix"></div>
                <div className="form-group col-lg-12">
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    maxLength="10"
                    className="form-control"
                    onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" 
                  />
                </div>
                <div className="form-group col-lg-12">
                  <button type="submit" id="login" className="btn btn-default">
                    Login
                  </button>
                </div>
              </div>
            </form>

            <div className="form-group col-lg-12">
              <button type="submit" className="btn btn-default">
                <Link to="/registration">Not a Member? Register here</Link>
              </button>
            </div>
            
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
