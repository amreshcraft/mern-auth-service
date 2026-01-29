import dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV } = process.env;

export const Config = {
    PORT,

    NODE_ENV: NODE_ENV || 'dev',
};

Object.freeze(Config);
