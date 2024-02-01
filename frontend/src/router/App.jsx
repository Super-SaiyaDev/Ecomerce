import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../home/page/login/components/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
