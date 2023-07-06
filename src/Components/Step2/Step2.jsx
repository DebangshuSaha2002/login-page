import React, { useState } from "react";
import "../../Components/LoginPage/LoginPage.css";
// import { Link } from "react-router-dom";

const ForgetPass = () => {
  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pin, setPin] = useState("");
  const [Country, setCountry] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState("");

  const onAddress1ChangeHandler = (event) => {
    const val1 = event.target.value;
    setAddress1(val1);
  };

  const onAddress2ChangeHandler = (event) => {
    const val2 = event.target.value;
    setAddress2(val2);
  };

  const onCityChangeHandler = (event) => {
    const val3 = event.target.value;
    setCity(val3);
  };

  const onStateChangeHandler = (event) => {
    const val4 = event.target.value;
    setState(val4);
  };

  const onPinChangeHandler = (event) => {
    const val5 = event.target.value;
    setPin(val5);
  };

  const onCountryChangeHandler = (event) => {
    const val6 = event.target.value;
    setCountry(val6);
  };

  const openMultiFormInNewTab = () => {
    window.open("/Step3", "_blank");
  };

  const NextButtonHandler = async (event) => {
    event.preventDefault();

    if (
      Address1.length === 0 ||
      Address2.length === 0 ||
      City.length === 0 ||
      State.length === 0 ||
      isNaN(Pin) ||
      Country.length === 0
    ) {
      setFormVisible(false);
      setError("Enter all the details");
      return;
    }

    try {
      const url = "https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/"; // Replace with your actual API endpoint

      const data = {
        address_1: Address1,
        address_2: Address2,
        city: City,
        state: State,
        pincode: Pin,
        country: Country,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error(error);
    }
    setFormVisible(true);
  };

  return (
    <div className="flex justify-center p-[0.7rem] ">
      <div className="form-container">
        <p className="title">Step-2</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">Address (Line-1)</label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder=""
              onChange={onAddress1ChangeHandler}
              value={Address1}
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">Address (Line-2)</label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder=""
              onChange={onAddress2ChangeHandler}
              value={Address2}
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">City</label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder=""
              onChange={onCityChangeHandler}
              value={City}
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">State</label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder=""
              onChange={onStateChangeHandler}
              value={State}
            />
          </div>
          <div className="input-group">
            <label htmlFor="number">Pincode</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder=""
              onChange={onPinChangeHandler}
              value={Pin}
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">Country</label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder=""
              onChange={onCountryChangeHandler}
              value={Country}
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
