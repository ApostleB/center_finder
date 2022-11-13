import express, {Application, Request, Response, NextFunction} from "express";
import { centerList } from "../controllers/centerController";

const apiRouter: Application = express();

apiRouter.get('/center', centerList);

export default apiRouter;