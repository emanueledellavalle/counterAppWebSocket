const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors())

let counter = 0;

app.get('/client', (req, res) => {
  fs.readFile('client.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
      return;
    }

    res.send(data);
  });
});

app.get('/', (req, res) => {
  res.send(`${counter}`);
});

app.get('/inc', (req, res) => {
  const increment = parseInt(req.query.n) || 0;
  counter += increment;
  res.send(`Counter has been incremented by ${increment}`);
});

app.get('/dec', (req, res) => {
  const decrement = parseInt(req.query.n) || 0;
  counter -= decrement;
  res.send(`Counter has been decremented by ${decrement}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
