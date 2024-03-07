import React, { useState } from "react";
import Sliderbar from "./components/sliderbar/sliderbar";
import NavbarSystem from "./components/navbar/navabar";
import HeroSystem from "./components/hero/hero";
// import Table from "./components/table";

const Principal = () => {
  return (
    <>
      <header>
        <nav>
          <NavbarSystem />
          <Sliderbar />
        </nav>
      </header>
      <section>
        <HeroSystem />

        {/* <Table /> */}
      </section>
    </>
  );
};

export default Principal;
