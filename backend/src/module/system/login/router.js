const express = require("express");
const respuesta = require("../../../red/respuesta");
const controlador = require("./controller");
const router = express.Router();

//! Login

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const items = await controlador.login(req.body).catch((err) => {
      console.error(err);
      respuesta.handleLogin(req, res, "Database error", []);
      throw err; // Esto interrumpe la ejecución de la función
    });

    if (items && items.length > 0) {
      const { user } = req.body;
      res.cookie("Users", user, { maxAge: 900000, httpOnly: true });
      console.log(user);
      return respuesta.handleLogin(req, res, "login successful", items);
    } else {
      respuesta.handleLogin(req, res, "No items found", []);
    }
  } catch (err) {
    console.error(err);
    respuesta.handleLogin(req, res, "Internal server error", []);
  }
});

router.get("/check", (req, res) => {
  if (req.cookies.Users) {
    res.send("Cookie exists");
  } else {
    res.send("Cookie does not exist");
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.send("Cookie deleted");
})

module.exports = router;
