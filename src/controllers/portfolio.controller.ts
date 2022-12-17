import { Request, Response } from "express";
import { dataBase } from "../models/portfolio.model";

export const contentCtrl = {
  getData: (req: Request, res: Response) => {
    const result = dataBase.getData();

    res.json({ message: result });
  },
  getPortfolio: (req: Request, res: Response) => {
    const result = dataBase.getPortfolio();

    res.json({ projects: result });
  },
  getProject: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const result = dataBase.getProject();

    res.json({ project: result[id] });
  },
  postProject: (req: Request, res: Response) => {
 
    const result = dataBase.postProject
  }
};
