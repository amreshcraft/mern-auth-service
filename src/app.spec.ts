import { calculateSquare } from './utils.ts';
import request from 'supertest';
import app from './app.ts';

describe('App', () => {
    it('should work', () => {
        const res = calculateSquare(5);
        expect(res).toBe(25);
    });

    it('sholud return 200 status code', async () => {
        const resposne = await request(app).get('/').send();
        expect(resposne.statusCode).toBe(200);
    });
});
