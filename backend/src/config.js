require("dotenv").config();

module.exports = {
    app: {
        Port: process.env.puerto,
    },
    mysql :  {
        host: process.env.mysqlHost || "localhost",
        user: process.env.mysqlUser || "root",
        password : process.env.mysqlPassword || "",
        database: process.env.mysqlDb|| "login",

    }
}