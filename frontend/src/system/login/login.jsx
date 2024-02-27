//! librar
//? to use react hooks and axios api
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiCoffeeTogo } from "react-icons/bi";
//? to import components and styles
import UserInput from "./components/input";
import "./css/login.css";

const LoginUser = () => {
  //? creating the usestate
  const [values, setValue] = useState({
    user: "",
    clave: "",
  });

  //? creating the handler change the of inputs components
  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  //? creating the usenavigate
  const navigate = useNavigate();

  //? this is the handleSumit or manager of menssage.
  const handleSumit = (e) => {
    e.preventDefault(); //* to when the form be activated o send
    console.log(values); //* printing the values of the useState
    //! i'am send the value of the inputs
    axios
      .post("http://localhost:3000/login", values)
      .then((res) => {
        if (values.clave != "" && values.user != "") {
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
      {/*contenedor */}
      <div className="container">
        <div className="container-1">
          {/* form */}
          <form action="" onSubmit={handleSumit} className="frm">
            {/* container of the all content */}
            <div className="input-group">
              {/* Logo */}

              <span className="icon">
                <BiCoffeeTogo />
                <span className="logo-name">Json Coffe</span>
              </span>

              <h1>Log in in the system</h1>

              {/* icons to login */}

              <div className="other-logins">
                <a className="google" href="#">
                  <span>
                    {" "}
                    <FaGoogle />
                    <FcGoogle />
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
              {/* line of the or */}

              <hr />
              <div className="or">
                <span>or</span>
              </div>

              {/* container the inputs */}

              <div className="input-feild">
                {/* importing the component input */}
                <UserInput
                  onChange={onChange}
                  type={"text"}
                  lblName={"Username"}
                  name={"user"}
                />
              </div>

              <div className="input-feild">
                {/* importing the component input */}
                <UserInput
                  onChange={onChange}
                  type={"password"}
                  lblName={"Password"}
                  name={"clave"}
                />
              </div>

              {/* links router */}
              <div className="link-router">
                <Link to="/register">Don't you Have an account? </Link>
                <Link to="/">Forgot your password.</Link>
                <span>
                  Don't you Have an
                  <Link className="link" to="/register">
                    account?
                  </Link>
                </span>
                <span>
                  Forgot
                  <Link className="link" to="/">
                    your password.
                  </Link>
                </span>
              </div>

              {/* btn for help to the handler submit of the form */}
              <div className="button">
                <button className="btn-lgn">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
