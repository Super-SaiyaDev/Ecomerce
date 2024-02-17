import React, { useState } from "react";
import Sliderbar from "./components/sliderbar";
import Table from "./components/table";
import './css/dashboard.css'

const Principal = () => {
  return (
    <>
      <header>
        <Sliderbar />
      </header>

      <section>
        <Table />
      </section>

    </>
  );
};

export default Principal;
