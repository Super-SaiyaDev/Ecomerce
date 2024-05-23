//! librery
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
//? var entorno
const config = require("./config");

//! modulo cliente
const clientes = require("./module/client/router");
const login = require("./module/system/login/router");

//! modulo proveedores
const proveedores = require("./module/proveedores/router");
const ventas = require("./module/ventas/router");

//! modulo casas
const casa = require("./module/casa/router");




const app = express();

//? config
app.set("port", config.app.Port || 3000);

//? middlwares
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//? Rutas
app.use("/api/clientes", clientes);
app.use("/api/user", login);
app.use("/api/proveedores", proveedores);
app.use("/api/ventas", ventas);
app.use("/api/casas", casa);

module.exports = app;
