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

    const { name, description, url, lenguages, githubUrl, image } = req.body

    const newProject = dataBase.postProject({
      name,
      description,
      url,
      lenguages,
      githubUrl,
      image
    })

    res.json(newProject)
  },
  putProject: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id)
    const name: string = req.body.name

    const result = dataBase.putProject(name, id)
    res.json({ result })
    console.log(res.statusCode)
  },
  deleteProject: (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id)

    const result = dataBase.deleteProject(id)
    res.json({ result })
  }
}