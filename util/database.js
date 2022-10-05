const mysql = require('mysql2');
const config = require('../config/config.json');

const pool = mysql.createPool({
    host    : config.DB_HOST,
    user    : config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME
});

module.exports = pool.promise();