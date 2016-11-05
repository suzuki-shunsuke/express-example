/**
 * Nodejs Express Hello World Application
 * 
 * $ node app.js
 */

const path = require('path');
const express = require('express');
const config = require('config');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

const APP_PORT = config.get('app.port');

app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}!`);
});
