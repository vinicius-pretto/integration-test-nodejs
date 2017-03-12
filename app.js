import express from 'express';
import bodyParser from 'body-parser';
import healthRouter from './routes/health';
import usersRouter from './routes/users';
import db from './db/db';

const app = express();

app.use(bodyParser.json());

app.db = db();

healthRouter(app);
usersRouter(app);

app.use((error, req, res, next) => {
    console.log(error);
    next(error);
});

export default app;