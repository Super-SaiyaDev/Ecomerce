import React from "react";
import "./login-clie.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const LoginClie = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="container-img">
            <img src="" alt="" />
            <div className="content">
              {/* Hola mundo */}
              <h1 className="title">Welcome</h1>
              <p className="texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis autem placeat sapiente nam explicabo
                aliquam iste at beatae. A.
              </p>
            </div>

            <div className="social-icon">
              <button className="insta"> <FaInstagram className="img"/></button>
              <button className="face"> <FaFacebookF className="img"/></button>
              <button className="twi"> <FaTwitter  className="img"/></button>
            </div>

          </div>

          <div className="input-groupt">
            <h1>Login</h1>

            <div className="register-link">
              <p>
                Don't have account?
                <a href=""> Create account</a>
              </p>
            </div>

            <div className="input-feild">
              <input type="text" placeholder="" />
              <label htmlFor="nombre"> Name</label>
            </div>

            <div className="input-feild">
              <input type="text" placeholder="" />
              <label htmlFor="nombre"> Email</label>
            </div>

            <div className="input-feild">
              <input type="password" placeholder="" />
              <label htmlFor="nombre" className="password">
                Password
              </label>
            </div>

            <div className="remenber">
              <label className="remenber-1">
                <input className="cuadrito" type="checkbox" />
                <span className="ramen">Remenber me </span>
              </label>

              <span>
                <a href="#" className="fol">
                  Forgot you password ?
                </a>
              </span>

            </div>

            <div className="button">
              <button type="submit">Login</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginClie;