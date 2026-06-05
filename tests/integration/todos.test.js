const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/db');

describe('todos API integration tests', () => {
  beforeAll(async () => {
    await db.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        completed BOOLEAN DEFAULT false
      );
    `);

    await db.query('DELETE FROM todos;');
  });

  afterAll(async () => {
    await db.query('DELETE FROM todos;');
    await db.end();
  });

  test('GET /todos should return an empty array initially', async () => {
    const response = await request(app).get('/todos');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /todos should create a new todo', async () => {
    const response = await request(app)
      .post('/todos')
      .send({ title: 'Prepare CI/CD presentation' });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Prepare CI/CD presentation');
  });

  test('GET /todos should return created todos', async () => {
    const response = await request(app).get('/todos');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});
