import express, { Request, Response } from "express";
import cors from 'cors';

import portfolioRouter from "./routes/portfolio.route"

// CREATE EXPRESS SERVER

const app = express();

// APP CONFIGURATION
app.use(cors());
app.use(express.json());
app.use(portfolioRouter)




//EXPORT
export default app