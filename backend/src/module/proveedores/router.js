
const express = require("express");
const router = express.Router();
const respuesta = require("../../red/respuesta");
const controlador = require("./controller");

//! listar
router.get("/", async (req, res) => {
  const items = await controlador.list();
  respuesta.success(req, res, items, 200);
});

//! list inactived
router.get("/reactivar", async (req, res) => {
  const items = await controlador.list_inactive();
  respuesta.success(req, res, items, 200);
});

//! buscar
router.get("/:id", async (req, res) => {
  try {
    const items = await controlador.search(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (err) {
    respuesta.error(req, res, err, 500);
  }
});

//! crear

router.post("/", async (req, res) => {
  try {
    const items = await controlador.add(req.body);
    console.log(items);
    respuesta.success(req, res, items, 200);
  } catch (err) {
    respuesta.error(req, res, err, 500);
  }
});

//! eliminar
router.delete("/:id", async (req, res) => {
  try {
    const items = await controlador.delet(req.params.id);
    respuesta.success(req, res, "datos eliminados correctamente", 200);
  } catch (err) {
    respuesta.error(req, res, err, 500);
  }
});

//! actualizar
router.put("/:id", async (req, res) => {
  try {
    const items = await controlador.update(req.body, req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (err) {
    respuesta.error(req, res, err, 500);
  }
});


//! reactivar
router.put('/reactivar/:id', async (req, res) => {
  try {
    const items = await controlador.reactivated(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (err) {
    respuesta.error(req, res, err, 500);
  }
});


module.exports = router;
