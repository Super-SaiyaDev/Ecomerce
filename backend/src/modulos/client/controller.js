const db = require("../../dataBase/db");
const table = "cliente";

const list = () => {
    return db.list(table);
}

module.exports = {
    list,
}