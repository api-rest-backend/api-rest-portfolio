import { Request, Response } from "express";
import portfolio from "../modules/db.json"

app.get('/portfolio', (req: Request, res: Response) => {
    res.status(200).send(portfolio)
})