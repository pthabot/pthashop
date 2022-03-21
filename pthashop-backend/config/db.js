'use strict'

const mysql = require('mysql');

const DBconfig = require('./db.config');

const connectDB = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBconfig.DB

})

connectDB.connect(err => {
    if (err) throw err;
    console.log('Database Connected')
});

module.exports = connectDB;