import React from "react";
import '../../css/home-page.css'
const Navbar2 = () => {
  return (
    <>
      <div className="container-menu2">
        <div className="container-rigth">logo</div>

        <div className="container-left">

          <div className="input-feild">
            <input type="text" className="inpu" />
            <i>icon</i>
          </div>

          <div className="contanctos">

            <div className="whasapp">
              <i>icon</i>
              <h4 className="title">whasapp</h4>
              <p className="paragraph">447-433-5690</p>
            </div>

            <div className="instagram">
              <i>icon</i>
              <h4 className="title">whasapp</h4>
              <p className="paragraph">447-433-5690</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
