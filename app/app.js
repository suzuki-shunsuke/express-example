/**
 * Nodejs Express Hello World Application
 * 
 * $ node app.js
 */

const express = require('express');
const config = require('config');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const APP_PORT = config.get('app.port');

app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}!`);
});
