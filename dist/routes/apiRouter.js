"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const centerController_1 = require("../controllers/centerController");
const apiRouter = (0, express_1.default)();
apiRouter.get('/center', centerController_1.centerList);
exports.default = apiRouter;
