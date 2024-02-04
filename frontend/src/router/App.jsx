import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../home/system/login/components/login";
// import Table from "../components/table";
import Principal from "../home/system/page/components/dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/table" element={<Table/>} />
        <Route path="/" element={<Principal />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Principal/>}/>
      </Routes>
    </Router>
  );
};

export default App;