import React from "react";
import { Link } from "react-router-dom";
 import "../css/navbarSystem.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram, FaUserCog } from "react-icons/fa";
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
            <div className="input-feild-nav">
              <select name="op-user" className="nav-select">
                <option value="op1" className="op-user1">
                  hola mundo
                </option>
                <option value="op2" className="op-user2">
                  hola mundo
                </option>
                <option value="op3" className="op-user3">
                  hola mundo
                </option>
                <option value="op4" className="op-user4">
                  hola mundo
                </option>
              </select>
            </div>

            <div className="input-feild-nav">
              <select name="op-user" id="select">
                <option value="op1" className="op-user1">
                  hola mundo
                </option>
                <option value="op2" className="op-user2">
                  hola mundo
                </option>
                <option value="op3" className="op-user3">
                  hola mundo
                </option>
                <option value="op4" className="op-user4">
                  hola mundo
                </option>
              </select>
            </div>

            <div className="input-feild-nav">
              <select name="op-user" id="select">
                <option value="op1" className="op-user1">
                  hola mundo
                </option>
                <option value="op2" className="op-user2">
                  hola mundo
                </option>
                <option value="op3" className="op-user3">
                  hola mundo
                </option>
                <option value="op4" className="op-user4">
                  hola mundo
                </option>
              </select>
            </div>

            <div className="btn-contact-nav">
              <button className="btn-nav">hola</button>
            </div>
          </div>
        </div>

        <div className="conteiner-nav-left">

          <div className="input-felid-nav">
            <input type="text" className="input-nav-search" />
            <span className="nav-span-search">
              <CiSearch className="nav-icon-search" />
            </span>
          </div>

          <div className="nv-icons-system">
            <i>
              <FaWhatsapp className="icon-menssage icon-nav" />
            </i>

            <i>
              <FaInstagram className="icon-notification icon-nav" />
            </i>

            <i>
              <CiSearch className="icon-alert icon-nav"  />
            </i>
          </div>
          <div className="profile-user">
            <Link>
              <i>
                <FaUserCog />
              </i>
            </Link>
            <label className="title-user" htmlFor="">Nombre del usuario </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
