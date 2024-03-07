import React from "react";
import './css/hero.css'
import Panel from "./compo/Panel";

const HeroSystem = () => {
  return (
    <>
      <div className="content-panel">
        <div className="content-panel-group">

          <Panel titulo='LAlALAlA' 
          info='24%' 
          price='$20,000'
          taks='+ 1.20 today'
          />

          <Panel titulo='LAlALAlA' 
          info='27%' 
          price='$20,000'
          taks='+ 0.20 today'
          />

          <Panel titulo='LAlALAlA' 
          info='25%' 
          price='$20,000'
          taks='+ 0.34 today'
          />

          <Panel titulo='LAlALAlA' 
          info='26% ' 
          price='$20,000'
          taks='+ 1.00 today'
          />

        </div>
        
      </div>
    </>
  );
};

export default HeroSystem;
