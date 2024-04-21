import React, { useState } from "react";
import Sliderbar from "./components/sliderbar/sliderbar";
import NavbarSystem from "./components/navbar/navabar";
import HeroSystem from "./components/hero/hero";

const Principal = () => {
  return (
    <>
      <header>
        <nav>
          <NavbarSystem />
        </nav>
      </header>
      <section>
        <Sliderbar />
        <HeroSystem />
      </section>
    </>
  );
};

export default Principal;
