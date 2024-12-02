const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!!');
});

console.log("Done setting up server endpoints")

module.exports = app;
