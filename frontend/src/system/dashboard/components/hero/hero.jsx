import React from "react";

const HeroSystem = () => {
  return (
    <>
      <div className="conteiner-hero">
        <div className="container-hero-navbar">
          <div className="container-title">
            <h1>hola mundo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consequuntur hic placeat iste molestiae voluptate ut, labore fuga magni modi?</p>
          </div>
          <div className="btn-hero">
            <button className="btn-hero-import">import</button>
            <button className="btn-hero-export">export</button>
          </div>
        </div>
        <div className="container-panel">
          <div className="panel-groupt">
            <div className="panel-feild">
              <div className="panel-info">
                <h1>producto</h1>
                <div className="panel-cant">
                  <h4>12,344</h4>
                </div>
              </div>
            </div>
            <div className="panel-feild">
              <div className="panel-info">
                <h1>producto</h1>
                <div className="panel-cant">
                  <h4>12,344</h4>
                </div>
              </div>
            </div>
            <div className="panel-feild">
              <div className="panel-info">
                <h1>producto</h1>
                <div className="panel-cant">
                  <h4>12,344</h4>
                </div>
              </div>
            </div>
            <div className="panel-feild">
              <div className="panel-info">
                <h1>producto</h1>
                <div className="panel-cant">
                  <h4>12,344</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSystem;
