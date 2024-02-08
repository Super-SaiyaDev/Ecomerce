const db = require("../../dataBase/db")

const login = (data) => {
  return db.login(table, data);
};

module.exports = {
  login,
};
