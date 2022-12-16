import { Request, Response } from "express";
import { dataBase } from "../models/portfolio.model"

export const contentCtrl = {
    getData: (req: Request, res: Response) => {

        const result = dataBase.getData();

        res.json({ message: result });
    }
}