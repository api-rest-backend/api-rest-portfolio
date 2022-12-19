import { Request, Response } from "express";
import { dataBase } from "../models/portfolio.model";

export interface newProject {
  name: string,
  description: string,
  url: string,
  lenguages: Array<string>,
  githubUrl: string,
  image: string
}


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
    // const nameProject = req.body

    // const result = dataBase.postProject(nameProject)

    // res.json({ body: result })

    const { name, description, url, lenguages, githubUrl, image } = req.body

    const addProject = dataBase.postProject({
      name,
      description,
      url,
      lenguages,
      githubUrl,
      image
    })

    res.json(addProject)
  }
};
