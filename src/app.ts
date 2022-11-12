import express, {Application, Request, Response, NextFunction} from "express";
import apiRouter from "./routes/apiRouter";

const app: Application = express();

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log("server running");
}) 