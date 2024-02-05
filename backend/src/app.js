//! librery
const express = require("express");
//? var entorno 
const config = require("./config");
//! modulo cliente
const clientes = require('./modulos/client/router');
const app = express();
//? config
app.set('port', config.app.port);

//? Rutas 
app.use('/api/clientes', clientes)


module.exports = app;