import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))