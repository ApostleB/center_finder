"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMiddleware = void 0;
const testMiddleware = (req, res, next) => {
    console.log("test Middleware");
    next();
};
exports.testMiddleware = testMiddleware;
