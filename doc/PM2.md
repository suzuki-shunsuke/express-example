# pm2

```
$ npm i -S pm2@latest
$ vi pm2.yml
```

```yaml
# pm2.yml
apps:
- script: ./app/app.js
  name: app
  watch:
  - app
  ignore_watch:
  - node_modules
  env:
    NODE_ENV: development
    DEBUG: express:*
```

```json
// package.json
{
  "scripts": {
    "pm2": "pm2",
    "start": "pm2 start pm2.yml"
  },
}
```

```
$ npm start
```

## pm2-docker

* [pm2-docker](http://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/)
* [Official Image](https://hub.docker.com/r/keymetrics/pm2-docker-alpine/)

```
$ vi docker-compose.yml
$ docker-compose up -d
```

```yaml
# docker-compose.yml
app:
  image: keymetrics/pm2-docker-alpine
  ports:
  - "3000:3000"
  hostname: app
  volumes:
  - .:/app
  command: [pm2-docker, start, --auto-exit, pm2.yml]
```
