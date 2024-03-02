const db = require("../../../dataBase/db")

const login = (data) => {
  return db.login("usuario",data);
};

module.exports = {
  login,
};
