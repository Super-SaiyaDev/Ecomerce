import React from "react";
import { Link } from "react-router-dom";
import "../css/home-page.css";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="container-h-left">
          <div className="h-circule">
            <div className="circule cr-1"></div>
            {/* <div className="circule cr-2"></div> */}
          </div>

          <div className="header-title">
            <h1 className="hr-title">
              Discover <br /> Most Suitable <br /> Property
            </h1>

            <p className="hr-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error
              esse ex placeat molestias beatae eligendi? Harum ratione ab atque.
            </p>
          </div>

          <div className="location">
            <div className="icon-location">
              <i className="icon-location-hr">
                <IoLocationSharp />
              </i>
            </div>

            <div className="input-feild-hr">
              <input type="text" placeholder="Search" className="input-hr" />
            </div>

            <div className="btn-location">
              <Link className="btn" to={"/"}>
                Search
              </Link>
            </div>
          </div>

          <div className="container-view">
            <div className="promo-view-hr">
              <div className="promo-view-title-hr">
                <h1 className="promo-title">9K+</h1>
                <p className="promo-text">
                  Lorem ipsum <br />
                  dolor
                </p>
              </div>
            </div>

            <div className="promo-view-hr">
              <div className="promo-view-title-hr">
                <h1 className="promo-title">9K+</h1>
                <p className="promo-text">
                  Lorem ipsum <br />
                  dolor
                </p>
              </div>
            </div>

            <div className="promo-view-hr">
              <div className="promo-view-title-hr">
                <h1 className="promo-title">9K+</h1>
                <p className="promo-text">
                  Lorem ipsum <br />
                  dolor
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-hright">
          <div className="content-img ">
            <img src="../assets/image-12.jpg" className="h-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
