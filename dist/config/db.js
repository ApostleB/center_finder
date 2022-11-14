"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "1234",
    database: "center_finder",
    port: 3306
};
const db = mysql_1.default.createConnection(dbConfig);
db.connect();
exports.default = db;
