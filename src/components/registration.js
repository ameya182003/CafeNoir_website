import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/registration", {
        email,
        password
      });

      if (response.data === "exist") {
        setError("User already exists");
      } else if (response.data === "notexist") {
        // Registration successful, you can redirect to the login page or another appropriate page
        history("/login");
      }
    } catch (e) {
      setError("An error occurred while processing your request");
      console.error(e);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              Registration
              <strong>form</strong>
            </h2>
            {error && <div className="error-message">{error}</div>}
            <hr />
            <form onSubmit={submit} method="POST">
              <div className="row">
                <div className="form-group col-lg-4">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    maxLength="255"
                    className="form-control"
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-lg-12">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    maxLength="10"
                    className="form-control"
                    onChange={(e) => { setPassword(e.target.value) }}
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-lg-12">
                  <button type="submit" id="register" className="btn btn-default">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
