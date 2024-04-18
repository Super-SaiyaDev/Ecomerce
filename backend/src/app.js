//! librery
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookie = require("cookie-parser");
//? var entorno
const config = require("./config");

//! modulo cliente
const clientes = require("./module/client/router");
const login = require("./module/system/login/router");

const app = express();

//? config
app.set("port", config.app.Port || 3000);

//? middlwares
app.use(morgan("dev"));
app.use(express.json());
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

module.exports = app;
