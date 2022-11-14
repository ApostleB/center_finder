import dotenv from "dotenv";
import mysql from "mysql";

const dbConfig = {
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
}

const db = mysql.createConnection(dbConfig);
db.connect();

export default db