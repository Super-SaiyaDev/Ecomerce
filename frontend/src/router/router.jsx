import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../home/system/login/components/login";
// import Table from "../components/table";
import Principal from "../home/system/page/components/dashboard";
import LoginClie from "../home/page/login/login-clie";

const Path = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/table" element={<Table/>} />
        <Route path="/" element={<Principal />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Principal />} />
        <Route path="/login-clie" element={<LoginClie />} />
      </Routes>
    </Router>
  );
};

export default Path;
