const sql = require("mssql");
const sqlConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_SERVER,
    options: {
        encrypt: false // for azure
    }
};

const connection = async() => {
    try {
        let pool = await sql.connect(sqlConfig);
        return pool;
    } catch (err) {
        console.error(err);
    }
};

export { connection, sql, sqlConfig };