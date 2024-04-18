require("dotenv").config();

module.exports = {
    app: {
        port: process.env.PORT || 3000,
    },
    mysql :  {
        host: process.env.mysqlHost || "localhost",
        user: process.env.mysqlUser || "root",
        password : process.env.mysqlPassword || "",
        database: process.env.mysqlDb|| "json-house",
    }
}