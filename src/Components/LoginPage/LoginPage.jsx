import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import MultiForm from "../Multiform/Multiform";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const onUserChangeHandler = (event) => {
    const value = event.target.value;
    setEmail(value);
    console.log(value);
  };

  const onPassChangeHandler = (event) => {
    const val = event.target.value;
    setPassword(val);
    console.log(val);
  };

  const SignInButtonHandler = async () => {
    if (email === "levitation@levitation.in" && password === "levitation") {
      setError("Successful");
      const apicall = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/"
      );
      console.log(apicall.body);
      if (apicall.ok) {
        setFormVisible(true);
        console.log(formVisible);
      }
    } else {
      setError("Failed");
    }
  };

  const openMultiFormInNewTab = () => {
    window.open("/formStepOne");
  };

  return (
    <div className="flex justify-center p-[9rem] bg-black/50 ">
      <div className="form-container ">
        <p className="title">Login</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              onChange={onUserChangeHandler}
              value={email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              onChange={onPassChangeHandler}
              value={password}
            />
            <div className="forgot">
              <Link to="/forgetpass">Forget Password?</Link>
            </div>
          </div>
          <button
            className="sign"
            onClick={(e) => {
              e.preventDefault();
              SignInButtonHandler(e);
            }}
          >
            Sign in
          </button>
        </form>
        {error ? (
          <div>
            <p className="grid justify-center p-4 capitalize font-bold text-xl">
              Login {error}!
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      {formVisible && openMultiFormInNewTab()}
    </div>
  );
};

export default LoginPage;
