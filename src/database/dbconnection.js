const sql = require("mssql");
const config = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  server: process.env.DB_SERVER,
  options: {
    encrypt: false, // for azure
  },
};

class dbconnection{

    constructor(){
        this.sqlConfig = config;
    }

}
module.exports = new dbconnection();