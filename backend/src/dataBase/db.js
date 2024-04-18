const db = require("mysql");
const config = require("../config");

const conection = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

const Database = db.createConnection(conection);

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
    Database.query(
      `SELECT * FROM ${table} WHERE estado = 'activo'`,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

const list_inactive = (table) => {
  return new Promise((resolve, reject) => {
    Database.query(
      `SELECT * FROM ${table} WHERE estado = 'inactivo'`,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

const reactivated = (table, id) => {
  return new Promise((resolve, reject) => {
    Database.query(
      `update ${table} set estado = 'activo' WHERE id_usuario = ${id};`,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

const search = (table, id) => {
  return new Promise((resolve, reject) => {
    Database.query(`SELECT * FROM ${table} WHERE id_usuario = ${id}`, (err, res) => {
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
    const sql = `UPDATE ${table} SET ? where id_usuario = ${id};`;
    Database.query(sql, [data], (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const delet = (table, id) => {
  return new Promise((resolve, reject) => {
    const sql = `update ${table} set activo = 'inactivo' WHERE id =  ${id};`;
    Database.query(sql, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

const login = (table, data) => {
  return new Promise((resolve, reject) => {
    Database.query(
      `SELECT * FROM ${table} WHERE usuario = '${data.user}' and clave = '${data.clave}' `,
      (err, res) => {
        err ? reject(err) : resolve(res);
      }
    );
  });
};

module.exports = {
  search,
  list,
  list_inactive,
  reactivated,
  add,
  delet,
  update,
  login,
};
