const express = require("express");
const respuesta = require("../../../red/respuesta");
const controlador = require("./controller");
const router = express.Router();

//! Login

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const items = await controlador.login(req.body);
      respuesta.handleLogin(req, res, items);
      return;
  } catch (err) {
    respuesta.error(req, res, err,500);
  }
});

module.exports = router;
