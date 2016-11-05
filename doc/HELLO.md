# Hello World

* http://expressjs.com/ja/
* http://expressjs.com/ja/starter/installing.html
* http://expressjs.com/ja/starter/hello-world.html

```
$ npm init
$ npm install -S express
$ mkdir app
$ vi app/app.js
$ cd app
$ node app.js
```

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
```

Access to http://localhost:3000
