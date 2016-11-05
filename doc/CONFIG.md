# config

https://github.com/lorenwest/node-config

```
$ npm i -S config
$ mkdir config
$ vi config/default.json
```

```
# config.json
{
  "app": {
    "port": "3000"
  }
}
```

```
const config = require('config');
const APP_PORT = config.get('app.port');
```
