# pug

* [Getting Started](https://pugjs.org/api/getting-started.html)

```
$ npm i -S pug path
$ mkdir app/views
$ vi app/views/index.pug
$ vi app/app.js
```

```javascript
// app.js
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});
```

```
doctype html
html
  head
    title Hello World
  body
    | Hello World!
```
