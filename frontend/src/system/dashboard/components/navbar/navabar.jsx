import React from "react";
import { Link } from "react-router-dom";
import "../css/navbarSystem.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram, FaUserCog,  FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
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
            <input type="text" className="input-nav-search" placeholder="search"/>    
            <CiSearch className="buscar"/>    
          </div>
        </div>

        <div className="conteiner-nav-left">

          <div className="input-felid-nav">

            <span className="nav-span-search">
            </span>
            
          </div>

          
          <div className="profile-user">
            <Link className="ico">
              <i >
                <FaUser/>
              </i>

            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
