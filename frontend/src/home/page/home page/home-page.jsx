import React from "react";
import Navbar from "./components/navbar/menu-1";
import Navbar2 from "./components/navbar/menu-2";
import Header from "./components/header/header";
import Sliderbar from "./components/sliderbar/sliderbar";
import "./css/home-page.css";

const PageHome = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar></Navbar>
          <Navbar2></Navbar2>
        </nav>
        <Header></Header>
      </header>

      <section>
        <Sliderbar></Sliderbar>
      </section>
      
    </>
  );
};

export default PageHome;
