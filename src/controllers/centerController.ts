import express, {Application, Request, Response, NextFunction} from "express";
import db from "../config/db"


export const centerList = async (req : Request, res:Response) => {

    const list = db.query("SELECT * FROM center order by id desc ", (err, rows) => {
        if(err) return res.send("error");
        return res.send(rows);
    });
}
