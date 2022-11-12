"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiRouter_1 = __importDefault(require("./routes/apiRouter"));
const app = (0, express_1.default)();
app.use('/', apiRouter_1.default);
app.listen(3000, () => {
    console.log("server running");
});
