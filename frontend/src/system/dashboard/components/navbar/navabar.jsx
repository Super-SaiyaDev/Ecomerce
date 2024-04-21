import React from "react";
import { Link } from "react-router-dom";
import "../css/navbarSystem.css";
import {  FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { BsFillHouseHeartFill } from "react-icons/bs";
const Navbar2 = () => {
  return (
    <>
      <nav className="container-nav-menu2">
        <div className="container-nav-right">
          <div className="container-nav-logo">
            <i>
              <BsFillHouseHeartFill className="icon-nav" />
            </i>
            <h1 className="title-nav">Json House</h1>
          </div>

          <div className="input-groupt-nav">
            <input
              type="text"
              className="input-nav-search"
              placeholder="search"
            />
            <CiSearch className="buscar" />
          </div>
        </div>

        <div className="conteiner-nav-left">

          <div className="content-config-profile">
            <div className="profile-user">
              <Link>
                <i className="icon-i">
                  <FaUser className="icon-profile nav-icon"/>
                </i>
              </Link>
            </div>

            <div className="profile-user">
              <Link >
                <i className="icon-i">
                  <IoIosSettings className="icon-setting nav-icon"/>
                </i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
