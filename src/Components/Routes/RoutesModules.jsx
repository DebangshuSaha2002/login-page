import React from "react";
import ForgetPass from "../ForgetPass/ForgetPass";
import LoginPage from "../LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import Multiform from "../Multiform/Multiform";
import Step2 from "../Step2/Step2";
const RoutesModules = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgetpass" element={<ForgetPass />} />
      <Route path="/formStepOne" element={<Multiform />} />
      <Route path="/Step2" element={<Step2 />} />
    </Routes>
  );
};

export default RoutesModules;
