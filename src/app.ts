import type { NextFunction, Request, Response } from 'express';
import express from 'express';

import type { HttpError } from 'http-errors';
// import createHttpError from 'http-errors';

const app = express();

app.get('/', async (_req, res) => {
    // const err = createHttpError(500, 'Something went wrong');
    // next(err);
    res.json({ message: 'Welcome to Auth Service' });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, _req: Request, res: Response, _next: NextFunction) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                message: err.message,
            },
        ],
    });
});

export default app;
