import React from "react";
import Navbar from "./components/navbar/menu-1";
import Navbar2 from "./components/navbar/menu-2";
import Header from "./components/header/header";
import Products from "./components/product/products";
import Footer from "./components/footer/footer";
import "./css/home-page.css";
import { useSpring, animated } from "react-spring";

const PageHome = () => {
  const [style, set] = useSpring(() => ({
    scale: 1,
    backgroundColor: "#fff",
  }));

  return (
    <>
      <header>
        <nav>
          <Navbar></Navbar>
          <Navbar2></Navbar2>
        </nav>
        <animated.div
          style={style}
          onMouseEnter={() => set({ scale: 1.1, backgroundColor: "#f00" })}
          onMouseLeave={() => set({ scale: 1, backgroundColor: "#fff" })}
        >
          <Header></Header>
        </animated.div>
      </header>
      <section>
        <Products></Products>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default PageHome;
