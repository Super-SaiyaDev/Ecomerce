const db = require("mysql");
const config = require("../config");

//? no se para que sirve
//? const { configDotenv } = require("dotenv");
//? const { connect } = require("../modulos/client/router");

const Database = db.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Inventario2",
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
      err ? reject(err) : resolve(res);
    });
  });
};

const search = (table, id) => {
  return new Promise((resolve, reject) => {
    Database.query(
      `SELECT * FROM ${table} WHERE idUser = ${id}`,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

const add = (table, data) => {
  return new Promise((resolve, reject) => {
    Database.query(
      `INSERT INTO ${table} ( nombre, apellido,telefono,email,presupuesto) Values (?,?,?,?,?);`,
      [data],
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

const update = (table, data, id) => {
  return new Promise((resolve, reject) => {
    Database.query(
      `UPDATE ${table} SET ID_cliente=[value-1],nombre=[value-2],apellido=[value-3],telefono=[value-4],email=[value-5],presupuesto=[value-6] WHERE ID_cliente =  1;`,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

const delet = (table, id) => {
  return new Promise((resolve, reject) => {
    Database.query(
      `DELETE FROM ${table} WHERE  ID_cliente = ${id} ;`,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

const login = (table, data) => {
  db.query(
    `"SELECT * FROM ${table} WHERE nombre = ${data.user} ";`,
    (err, res) => {
      err ? reject(err) : resolve(res);
    }
  );
};

module.exports = {
  search,
  list,
  add,
  delet,
  update,
  login
};
