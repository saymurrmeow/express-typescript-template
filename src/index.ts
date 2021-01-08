import express from 'express';

const PORT: string | number = process.env.NODE_ENV ?? 8089;

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('CHANGE');
});

app.get('/test', (req, res) => {
  res.send('TEST');
});

app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});
