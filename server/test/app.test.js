const request = require('supertest');
const app = require('../src/app')

describe('Test the root path', () => {
    test('It should response the GET endpoint', async () => {
        try {
            const resp = await request(app).get('/');
            expect(resp.statusCode).toBe(200);
            expect(resp.json()).toBe('Hello World!');
        } catch (e) {
            console.log(e)
        }
    })
})