//npm install --save-dev jest supertest

const request = require('supertest');
const app = require('../index'); 
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /posts', () => {
  it('debería devolver un array con status 200', async () => {
    const response = await request(app).get('/posts');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
