const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>IEEE RAS!!! 🔥</h1><br> <h2>Devops Workshop</h2>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});