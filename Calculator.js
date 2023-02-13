const express = require('express');
const app = express();

app.get('/add', (req, res) => {
  const numbers = req.query.number;
  const sum = numbers.reduce((acc, cur) => acc + parseInt(cur), 0);
  res.send(`${sum}`);
});

app.get('/multiply', (req, res) => {
  const numbers = req.query.number;
  const product = numbers.reduce((acc, cur) => acc * parseInt(cur), 1);
  res.send(`${product}`);
});


app.listen(5000, () => {
  console.log("Listening on port 5000" );
});
