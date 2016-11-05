# static files

```
$ vi app/app.js
$ mkdir app/static
$ vi app/static/entry.js
$ vi app/views/index.pug
```

```javascript
// app.js
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'static')));
```

```javascript
// entry.js
/**
 * http://youmightnotneedjquery.com/#ready
 */
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  console.log('Hello World');
});
```
