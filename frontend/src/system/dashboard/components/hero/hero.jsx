import React from "react";
import './css/hero.css'
import Panel from "./compo/Panel";
import ExampleBarChart from "./compo/grafico";
import GraficoPastel from "./compo/graficoPastel";


const HeroSystem = () => {
  return (
    <>
      <div className="content-panel">
        <div className="content-panel-group">

          <Panel titulo='Categoria'
            info='24%'
            price='$200'
            taks='+ 1.20 today'
          />

          <Panel titulo='Producto'
            info='27%'
            price='$20,000'
            taks='+ 0.20 today'
          />

          <Panel titulo='Cliente'
            info='25%'
            price='$200,000'
            taks='+ 0.34 today'
          />

          <Panel titulo='Usuario'
            info='26% '
            price='$5,000'
            taks='+ 1.00 today'
          />


        </div>



      </div>

      <div className="grafics">

        <div className="content-grafic">

          <ExampleBarChart />
          <GraficoPastel />
        </div>
      </div>


    </>
  );
};

export default HeroSystem;
