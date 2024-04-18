const database = require("../../dataBase/buy");

const buy = (data) => {
  return database.Selectbuy("propitiers", data);
};

module.exports = {
  buy
}
