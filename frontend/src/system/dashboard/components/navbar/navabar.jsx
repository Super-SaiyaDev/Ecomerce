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
      <nav className="container-menu2">
        <div className="container-nav-right">
          <div className="container-logo">
            <i>
              <BsFillHouseHeartFill className="icon" />
            </i>
            <h1>Json House</h1>
          </div>

          <div className="input-groupt-nav">
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

            <div className="btn-contact">
              <button className="btn"></button>
            </div>
          </div>
        </div>

        <div className="conteiner-nav-left">
          <div className="input-felid-nav">
            <input type="text" className="input-search" />
            <span className="conteiner-icon-search">
              <CiSearch className="icon-search" />
            </span>
          </div>

          <div className="icons-system">
            <i>
              <FaWhatsapp className="icon-menssage" />
            </i>

            <i>
              <FaInstagram className="icon-notification" />
            </i>

            <i>
              <CiSearch className="icon-alert" />
            </i>
          </div>
          <div className="profile-user">
            <Link>
              <i>
                <FaUserCog />
              </i>
            </Link>
            <label htmlFor="">Nombre del usuario </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
