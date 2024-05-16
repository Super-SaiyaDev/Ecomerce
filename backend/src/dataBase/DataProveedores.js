
const db = require("mysql");
const config = require("../config");

const conection = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

const Database = db.createConnection(conection);


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