const db = require("mysql");
const config = require("../config");

//? no se para que sirve
//? const { configDotenv } = require("dotenv");
//? const { connect } = require("../modulos/client/router");

const Database = db.createConnection({
  host: "localhost",
  user: "root",
  password: "Edel_Son_1520_Arias",
  database: "login",
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
    Database.query(`SELECT * FROM ${table} Where activo = 'activo'`, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const search = (table, id) => {
  return new Promise((resolve, reject) => {
    Database.query(`SELECT * FROM ${table} WHERE id = ${id}`, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const add = (table, data) => {
  return new Promise((resolve, reject) => {
    Database.query(`INSERT INTO ${table} SET ?;`, [data], (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const update = (table, data, id) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE ${table} SET ? where id = ${id};`;
    Database.query(sql, [data], (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const delet = (table, id) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE ${table} SET
     activo   =  "inactivo" where id = ${id};`;
    Database.query(sql, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const login = (table,data) => {
  return new Promise((resolve, reject) => {
    Database.query(`SELECT * FROM ${table} WHERE usuario = "${data.user}" and clave = "${data.clave}"`, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports = {
  search,
  list,
  add,
  delet,
  update,
  login,
};
