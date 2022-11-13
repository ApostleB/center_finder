import express, {Application, Request, Response, NextFunction} from "express";
import morgan from "morgan";
import bodyParser from "body-parser";


import { testMiddleware } from "./middlewares";
import apiRouter from "./routes/apiRouter";

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(testMiddleware);
app.use('/api', apiRouter);



app.listen(3000, () => {
    console.log("server running");
}) 