import React from "react";
import Navbar from "./components/navbar/menu-1";
import Navbar2 from "./components/navbar/menu-2";
import "./css/home-page.css";

const PageHome = () => {
  return (
    <>
      <nav>
        <Navbar></Navbar>
        <Navbar2></Navbar2>
      </nav>
    </>
  );
};

export default PageHome;
