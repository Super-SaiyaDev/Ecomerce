import React, { useState } from "react";
import "./css/table.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";

function Table() {
  const [isInputFocused, setInputFocused] = useState(false);
  return (
    <div className="content">
      <div className="content-T">
        <div className="header-table">
          <div className="title-table">
            <h1>Users Management</h1>
          </div>

          <div className="navigate-table">
            <button to="/">
              <IoMdPersonAdd /> New User
            </button>

            <div className="search">
            <i className={`lbl-search ${isInputFocused ? 'desactived' : ''}`}><IoSearchOutline /></i>
              <input
                type="text"
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
              />
             

            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  src="https://th.bing.com/th/id/OIP.MhCeRSMugeDNOj-n2SbToQHaHa?pid=ImgDet&w=182&h=182&c=7"
                  alt=""
                />
                Juan
              </td>
              <td>Pére Nuñez</td>
              <td>juanperez@example.com</td>
              <td>activo</td>
            </tr>

            <tr>
              <td>2</td>
              <td>
                <img
                  src="https://th.bing.com/th/id/OIP.DqQp2MTPz9G8kcWeHoAj8gAAAA?rs=1&pid=ImgDetMain"
                  alt=""
                />
                Maria
              </td>
              <td>González</td>
              <td>mariagonzalez@example.com</td>
              <td>activo</td>
            </tr>

            <tr>
              <td>3 </td>
              <td>
                <img
                  src="https://th.bing.com/th/id/OIP.j5liSvLK18lsGRTja6ZR0QHaJQ?rs=1&pid=ImgDetMain"
                  alt=""
                />
                Maria
              </td>
              <td>González</td>
              <td>mariagonzalez@example.com</td>
              <td>activo</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Aquí va el contenido principal */}
    </div>
  );
}

export default Table;
