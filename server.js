// Requiring modules
const express = require('express');
const app = express();
require('dotenv').config()
console.log(process.env) // remove this aft

const sql = require('mssql')
const sqlConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_SERVER,
    options: {
        encrypt: false, // for azure
    }
}

// Get request
app.get('/', async (req, res) => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(sqlConfig)
        const result = await sql.query`select * from usuario`
        console.log(result); 
        res.send(result.recordset);          
    } catch (err) {
        // ... error checks
    }
});

app.get('/usuario', async (req, res) => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(sqlConfig)
        const result = await sql.query`select * from usuario`
        console.dir(result); 
        res.send(result.recordset);          
    } catch (err) {
        // ... error checks
    }
});

app.get('/rol', async (req, res) => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(sqlConfig)
        const result = await sql.query`select * from rol`
        console.dir(result); 
        res.send(result.recordset);          
    } catch (err) {
        // ... error checks
    }
});

app.get('/paciente', async (req, res) => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(sqlConfig)
        const result = await sql.query`select * from paciente`
        console.dir(result);
        console.log(result.recordset.length); 
        res.send(result.recordset);          
    } catch (err) {
        // ... error checks
    }
});

let server = app.listen(9090, function () {
    console.log('Server is listening at port 9090...');
});