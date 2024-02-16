import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";
import "./css/login.css";
import axios from "axios";

const LoginUser = () => {
  //? creating the usestate
  const [value, stateValues] = useState({
    user: "",
    clave: "",
  });
  //? creating the usenavigate
  const navigate = useNavigate();

  //? this is the handleSumit or manager of menssage.
  const handleSumit = (e) => {
    e.preventDefault();
    console.log(value);
    axios
      .post("http://localhost:3000/login", value)
      .then((res) => {
        if (value.clave != "" && value.user != "") {
          if (res.data.Status === "Success") {
            navigate("/home");
          } else {
            navigate("/login");
            alert("Contraseña o usuario incorrectos");
          }
        } else {
          alert("rellene todos los campos");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section>
        <div className="container">
          <form action="" onSubmit={handleSumit} className="frm">
            <div className="input-group">
              <span className="icon">
                <BiCoffeeTogo />
                <span className="logo-name">Json Coffe</span>
              </span>

              <h1>Log in in the system</h1>

              <div className="other-logins">
                <a className="google" href="#">
                  <span>
                    {" "}
                    <FaGoogle />
                  </span>
                  <span className="logo-span">Continue with Google</span>
                </a>
                <a className="instagram" href="#">
                  <FaInstagram />
                  <span className="logo-span">Continue with Instagram</span>
                </a>
                <a className="facebook" href="#">
                  <FaFacebook />
                  <span className="logo-span">Continue with Facebook</span>
                </a>
              </div>
              <hr />
              <div className="or">
                <span>or</span>
              </div>

              <div className="input-feild">
                <input
                  type="text"
                  name="username"
                  onChange={(e) =>
                    stateValues({ ...value, user: e.target.value })
                  }
                />
                <label htmlFor="">username</label>
              </div>

              <div className="input-feild">
                <input
                  type="password"
                  name="password"
                  onChange={(e) =>
                    stateValues({ ...value, clave: e.target.value })
                  }
                />
                <label htmlFor="">Password</label>
              </div>

              <div className="link-router">
                <Link to="/register">Don't you Have an account? </Link>
                <Link to="/">Forgot your password.</Link>
              </div>

              <div className="button">
                <button className="btn-lgn">Login</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginUser;
