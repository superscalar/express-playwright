const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo!!');
});

console.log("Done setting up server endpoints")

module.exports = app;
