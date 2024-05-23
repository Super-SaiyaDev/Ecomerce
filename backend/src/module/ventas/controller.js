const db = require("../../dataBase/Dataventa");
const table = "ventacasa";

const list = () => {
  return db.list(table);
};

const list_inactive = () => {
  return db.list_inactive(table);
};  

const reactivated = (id) => {
  return db.reactivated(table, id);
};

const search = (id) => {
  return db.search(table, id);
};

const add = (data) => {
  return db.add(table, data);
};

const delet = (id) => {
  return db.delet(table, id);
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
  list_inactive,
  reactivated,
  add,
  delet,
  update,
  login
};
