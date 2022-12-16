import { Application, Request, Response } from "express";
import portfolio from "../routes/modules/db.json"

export const endPoints = (app:Application): void => {
    app.get("/portfolio", (req, res) => {
        return res.status(200).send(portfolio)
    })
}
