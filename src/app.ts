import express, { Request, Response } from "express";
import cors from 'cors';

import { endPoints } from "./controllers/api"

// CREATE EXPRESS SERVER

const app = express();

// EXPRESS CONFIGURATION

app.use(cors());
app.use(express.json());


export default app