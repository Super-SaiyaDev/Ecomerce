const express = require("express");
const respuesta = require("../../red/respuesta");
const controlador = require("./controller");
const router = express.Router();

//! Login
router.post("login/", async (req, res) => {
  try {
    const items = await controlador.login(req.params.name);
    respuesta.success(req, res, items, 200);
  } catch (err) {
    respuesta.error(req, res, err, 500);
  }
});

module.exports = router;