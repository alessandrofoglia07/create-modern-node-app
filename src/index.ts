import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from 'mongoose';

dotenv.config();

const app = express();

const CLIENT_URL = process.env.CLIENT_URL || '*';
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(
    cors({
        origin: CLIENT_URL
    })
);

await (async () => {
    try {
        if (!MONGO_URI) {
            console.log('Connection to MongoDB failed: no URI provided. Make sure to set the MONGO_URI environment variable.');
        } else {
            await connect(MONGO_URI);
            console.log('Connected to MongoDB');
        }

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
})();

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
    type NewResponse = {
        message: string;
        env?: string;
    };
    const obj: NewResponse = {
        message: 'Hello world!'
    };
    if (process.env.NODE_ENV) {
        obj.env = process.env.NODE_ENV;
    }
    res.json(obj);
});

app.all('*', (req: Request, res: Response) => res.sendStatus(404));
