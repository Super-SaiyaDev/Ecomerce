const express = require("express");
const router = express.Router();
const respuesta = require("../../red/respuesta");
const controlador = require("./controller");

router.get("/", async (req, res) => {
  const items = await controlador.list();
  respuesta.success(req, res, items, 200);
});

router.get("/:id", async (req, res) => {
  try {
    const items = await controlador.buscar(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (err) {
    respuesta.error(req, res, err, 500);
  }
});

module.exports = router;
