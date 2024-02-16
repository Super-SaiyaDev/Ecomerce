import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./css/login-clie.css";
import Input from "./components/input-feild";
import { Link } from "react-router-dom";

const LoginClie = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSumit = (e) => {
    const [value, name] = e.target;
    setValue({ ...value, [name]: value });
  };

  const handlerSumit = (e) => {
    e.prevenDefault();
    console.log(value);
  };
  return (
    <>
      <div className="container">
        <div className="container-img">
          <img src="" alt="" />

          <div className="content">
            {/* Hola mundo */}
            <h1 className="title">Welcome</h1>

            <p className="texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              perspiciatis autem placeat sapiente nam explicabo aliquam iste at
              beatae. A.
            </p>
          </div>

          <div className="social-icon">
            <button className="insta">
              <FaInstagram className="img" />
            </button>
            <button className="face">
              <FaFacebookF className="img" />
            </button>
            <button className="twi">
              <FaTwitter className="img" />
            </button>
          </div>
        </div>

        <form onChange={handlerSumit}>
          <div className="input-groupt">
            <h1>Login</h1>

            <div className="register-link">
              <p>
                Don't have account?
                <a href=""> Create account</a>
              </p>
            </div>

            <div className="input-feild">
              <Input
                onSumit={onSumit}
                val={value.name}
                type={"text"}
                lblName={"name"}
              ></Input>
            </div>

            <div className="input-feild">
              <Input type={"email"} lblName={"email"}></Input>
            </div>

            <div className="input-feild">
              <Input type={"password"} lblName={"password"}></Input>
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
              <button className="lnk-login" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginClie;
