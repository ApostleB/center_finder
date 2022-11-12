"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiRouter = (0, express_1.default)();
apiRouter.get('/', (req, res, next) => {
    res.send("Hello");
});
exports.default = apiRouter;
