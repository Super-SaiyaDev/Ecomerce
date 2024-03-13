import React from "react";
import Navbar from "./components/navbar/menu-1";
import Navbar2 from "./components/navbar/menu-2";
import Header from "./components/header/header";
import Products from "./components/product/products";
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
        <Products></Products>
      </section>
    </>
  );
};

export default PageHome;
