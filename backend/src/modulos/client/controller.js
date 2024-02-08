const db = require("../../dataBase/db");
const table = "cliente";

const list = () => {
  return db.list(table);
};

const search = (id) => {
  return db.search(table, id);
};

const add = (data) => {
  return db.add(table, data);
};

const delet = (data) => {
  return db.delet(table, data.id);
};

const update = (data, id) => {
    return db.update(table, data, id);
  };

module.exports = {
  list,
  search,
  add,
  delet,
  update
};
