import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./css/login-clie.css";
import Input from "./components/input-feild";
import { Link } from "react-router-dom";

const LoginClie = () => {
  const [values, setValue] = useState({
    user: "",
    email: "",
    clave: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  const handlerSumit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="container">
        <div className="container-img">
          <div className="content">
            <div className="content-text">
              {/* Hola mundo */}
              <h1 className="title">Welcome</h1>

              <p className="texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis autem placeat sapiente nam explicabo
                aliquam iste at beatae. A.
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

          <form onSubmit={handlerSumit}>
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
                  onChange={onChange}
                  type={"text"}
                  name={"user"}
                  lblName={"name"}
                />
              </div>

              <div className="input-feild">
                <Input
                  onChange={onChange}
                  type={"email"}
                  name={"email"}
                  lblName={"email"}
                />{" "}
              </div>

              <div className="input-feild">
                <Input
                  onChange={onChange}
                  type={"password"}
                  name={"clave"}
                  lblName={"Clave"}
                />{" "}
                <span className="Forgot-span">
                  Forgot
                  <Link to="/" className="forgot">
                    you password ?
                  </Link>
                </span>
              </div>

              <div className="input-feild">
                <Input
                  onChange={onChange}
                  type={"text"}
                  name={"user"}
                  lblName={"name"}
                />
              </div>

              <div className="input-feild">
                <Input
                  onChange={onChange}
                  type={"email"}
                  name={"email"}
                  lblName={"email"}
                />{" "}
              </div>

              <div className="input-feild">
                <Input
                  onChange={onChange}
                  type={"password"}
                  name={"clave"}
                  lblName={"Clave"}
                />{" "}
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

                <span className="fol-span">
                  Forgot
                  <Link to="/" className="fol">
                    you password ?
                  </Link>
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
      </div>
    </>
  );
};

export default LoginClie;
