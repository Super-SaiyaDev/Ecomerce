import React, { useState } from "react";
import Sliderbar from "./components/sliderbar";
import Table from "./components/table";
import './css/dashboard.css'

const Principal = () => {
  return (
    <>
      <header>
        <nav>
        <Sliderbar />

        </nav>
      </header>

      <section>
        <Table />
      </section>

    </>
  );
};

export default Principal;
