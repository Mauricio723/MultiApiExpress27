import mysql from "mysql2/promise";

const datos_conexion_db_clever_cloud = {
    host: process.env.CLEVER_CLOUD_MYSQL_HOST,
    user: process.env.CLEVER_CLOUD_MYSQL_USER,
    port: process.env.CLEVER_CLOUD_MYSQL_PORT,
    password: process.env.CLEVER_CLOUD_MYSQL_PASSWORD,
    database: process.env.CLEVER_CLOUD_MYSQL_DB
};


const dbclconnection = await mysql.createConnection(datos_conexion_db_clever_cloud);


export default dbclconnection;
