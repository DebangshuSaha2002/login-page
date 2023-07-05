import React, { useState } from "react";
import "../../Components/LoginPage/LoginPage.css";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [Phnum, setPhnum] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState("");

  const onUserChangeHandler = (event) => {
    const value = event.target.value;
    setUser(value);
  };

  const onEmailChangeHandler = (event) => {
    const val = event.target.value;
    setEmail(val);
  };

  const onPhNumChangeHandler = (event) => {
    const valph = event.target.value;
    setPhnum(valph);
  };

  const openMultiFormInNewTab = () => {
    window.open("/Step2", "_blank");
  };

  const NextButtonHandler = (event) => {
    event.preventDefault();

    if (user.length === 0 || email.length === 0 || isNaN(Phnum)) {
      setFormVisible(false);
      setError("Enter all the details");
      return;
    } else {
      setFormVisible(true);
    }
  };

  return (
    <div className="flex justify-center p-[9rem] ">
      <div className="form-container">
        <p className="title">Step-1</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              onChange={onUserChangeHandler}
              value={user}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              onChange={onEmailChangeHandler}
              value={email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="number">Ph Num</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder=""
              onChange={onPhNumChangeHandler}
              value={Phnum}
            />
          </div>
          <button className="sign mt-4" onClick={NextButtonHandler}>
            Next
          </button>
        </form>
        {error && (
          <div>
            <p className="grid justify-center p-4 capitalize font-bold text-xl">
              {error}!
            </p>
          </div>
        )}
      </div>
      {formVisible && openMultiFormInNewTab()}
    </div>
  );
};

export default ForgetPass;
