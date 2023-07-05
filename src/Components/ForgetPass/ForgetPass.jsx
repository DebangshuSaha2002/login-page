import React from "react";
import "../../Components/LoginPage/LoginPage.css";
const ForgetPass = () => {
  const ResetButtonHandler = (event) => {
    event.preventDefault();
    console.log("Hello");
  };
  return (
    <div className="flex justify-center p-[9rem] ">
      <div className="form-container">
        <p className="title">Forget Password</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              // onChange={onUserChangeHandler}
              // value={email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              // onChange={onPassChangeHandler}
              // value={password}
            />
          </div>
          <button className="sign mt-4" onClick={ResetButtonHandler}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
