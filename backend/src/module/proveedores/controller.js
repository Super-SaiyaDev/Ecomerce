controller.js 
const db = require("../../dataBase/DataProveedores");
const table = "proveedores";

const list = () => {
  return Dataproveedores.list(table);
};

const list_inactive = () => {
  return Dataproveedores.list_inactive(table);
};  

const reactivated = (id) => {
  return Dataproveedores.reactivated(table, id);
};

const search = (id) => {
  return Dataproveedores.search(table, id);
};

const add = (data) => {
  return Dataproveedores.add(table, data);
};

const delet = (id) => {
  return Dataproveedores.delet("usuario", id);
};

const update = (data, id) => {
  return Dataproveedores.update(table, data, id);
};

const login = (data) => {
  return Dataproveedores.login(table, data);
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
