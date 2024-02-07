const db = require("mysql");
const config = require("../config");

//? no se para que sirve
//? const { configDotenv } = require("dotenv");
//? const { connect } = require("../modulos/client/router");

const Database = db.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "json-house",
});

Database.connect((err) => {
  if (err) return console.log("Error connexion in the data of base :", err);
  console.log("connexion is runnig");
});

Database.on("error", (err) => {
  console.log("Error en la base de datos", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Error in the CONNECTION LOST");
  } else {
    throw err;
  }
});

const list = (table) => {
  return new Promise((resolve, reject) => {
    Database.query(`SELECT * FROM ${table}`, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

const search = (table, id) => {
  return "listing value";
};

const add = (table, id) => {
  return "add value";
};

const delet = (table, id) => {
  return "delete value";
};

module.exports = {
  search,
  list,
  add,
  delet,
};
