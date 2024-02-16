import React, { useState } from "react";
import Sliderbar from "./components/sliderbar";
import Table from "./components/table";

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
