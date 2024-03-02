const db = require("../../dataBase/db");
const table = "usuario";

const list = () => {
  return db.list(table);
};

const search = (id) => {
  return db.search(table, id);
};

const add = (data) => {
  return db.add(table, data);
};

const delet = (id) => {
  return db.delet("usuario", id);
};

const update = (data, id) => {
  return db.update(table, data, id);
};

const login = (data) => {
  return db.login(table, data);
};

module.exports = {
  list,
  search,
  add,
  delet,
  update,
  login
};
