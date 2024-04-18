const conect = require("../config");
const Database = require("./db");

const Selectbuy = (table, id) => {
  return new Promise((resolve, reject) => {
    Database.query(`SELECT * FROM ${table} WHERE ID = ${id}`, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports = {
    Selectbuy
}