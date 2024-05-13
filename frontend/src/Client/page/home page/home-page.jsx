import React from "react";
import Navbar from "./components/navbar/menu-1";
import Navbar2 from "./components/navbar/menu-2";
import Header from "./components/header/header";
import Aboutme from "./components/about/about";
import Products from "./components/product/products";
import Footer from "./components/footer/footer";
import Cita from "./components/cita/cita";
import "./css/home-page.css";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Comienza transparente y un 80% de su tamaño original
          animate={{ opacity: 1, scale: 1 }} // Termina completamente opaco y a su tamaño original
          transition={{ duration: 1 }} // La transición dura 1 segundo
        >
          <Header></Header>
        </motion.div>
      </header>
      <Aboutme></Aboutme>
      <section>
        <Products></Products>
      </section>
      <aside>
        <Cita></Cita>
      </aside>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default PageHome;
