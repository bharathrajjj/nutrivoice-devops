const request = require('supertest');
const app = require('../app');

describe('GET /api/meals', () => {
  it('should return empty meal list initially', async () => {
    const res = await request(app).get('/api/meals');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });
});
