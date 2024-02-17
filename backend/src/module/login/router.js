const express = require("express");
const respuesta = require("../../red/respuesta");
const controlador = require("./controller");
const app = express.Router();

app.post("/", (req, res) => {
  controlador.login(req.body);
  respuesta.success(req, res, items, 200);
});
