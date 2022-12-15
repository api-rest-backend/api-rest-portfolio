import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    console.log('soy dislexico')
    res.send('soy dislexico')
})

const PORT = 3000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))