import express, {Application, Request, Response, NextFunction} from "express";

const apiRouter: Application = express();

apiRouter.get('/', (req : Request, res: Response, next:NextFunction) => {   
    res.send("api");
});

export default apiRouter;