import React from "react";
import Navbar from "../components/menu-1";
import Navbar2 from "../components/menu-2";
import Header from "../components/header";
// import Aboutme from "../components/components/about/about";
// import Products from "../components/components/product/products";
import Footer from "../components/footer";
import "../css/home-page.css";
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
        {/* <Aboutme></Aboutme> */}
        {/* <Products></Products> */}
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default PageHome;
