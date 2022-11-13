import mysql from "mysql";

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "1234",
    database: "center_finder",
    port : 3306
}

const db = mysql.createConnection(dbConfig);
db.connect();

export default db