const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());
app.get('/todos', async (req, res) => {
  const result = await db.query('SELECT * FROM todos ORDER BY id');
  res.json(result.rows);
});
app.post('/todos', async (req, res) => {
  const { title } = req.body;
  const result = await db.query(
    'INSERT INTO todos (title) VALUES ($1) RETURNING *',
    [title],
  );
  res.status(201).json(result.rows[0]);
});
module.exports = app;
