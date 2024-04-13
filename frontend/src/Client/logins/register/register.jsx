import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./css/register.css";
import Input from "./components/input-feild";
import { Link } from "react-router-dom";

const Register = () => {
  const [values, setValue] = useState({
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
      <div className="container-login">
        <div className="container-img">
          <div className="content-text">
            {/* Hola mundo */}
            <h1 className="title">Register In</h1>

            <p className="texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              perspiciatis autem placeat sapiente nam explicabo aliquam iste at
              beatae. A.
            </p>
          </div>

          <div className="social-icon">
            <button className="btn-img insta">
              <FaInstagram className="img" />
            </button>
            <button className="btn-img face">
              <FaFacebookF className="img" />
            </button>
            <button className="btn-img twi">
              <FaTwitter className="img" />
            </button>
          </div>
        </div>

        <form onSubmit={handlerSumit}>
          <div className="input-groupt">
            <h1>Register</h1>

            <div className="register-link">
              <span className="Forgot-span">
                I have
                <Link to="/login-clie" className="forgot">
                  an account?
                </Link>
              </span>
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
                <input className="checkbox" type="checkbox" />
                <span className="ramen">Remenber me </span>
              </label>

              <span className="fol-span">
                Forgot
                <Link to="/" className="fol">
                  you password ?
                </Link>
              </span>
            </div>

            <div className="button">
              <button className="lnk-register" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
