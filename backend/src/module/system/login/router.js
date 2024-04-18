const express = require("express");
const respuesta = require("../../../red/respuesta");
const controlador = require("./controller");
const router = express.Router();

//! Login

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const items = await controlador.login(req.body)
      .catch(err => {
        console.error(err);
        respuesta.handleLogin(req, res, "Database error", []);
        throw err; // Esto interrumpe la ejecución de la función
      });

    if (items) {
      respuesta.handleLogin(req, res, "login successful", items);
    } else {
      respuesta.handleLogin(req, res, "No items found", []);
    }
  } catch (err) {
    console.error(err);
    respuesta.handleLogin(req, res, "Internal server error", []);
  }
});

module.exports = router;
