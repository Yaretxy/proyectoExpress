const mysql = require('mysql2/promise');
const conexion = require('../conexion/conexion');

async function query(sql){
    const conectar = await mysql.createConnection(conexion.db);
    const [result,] = await conectar.execute(sql);

    return result;
};

module.exports = {query}