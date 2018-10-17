# js版本的简化POW

## todo

* route e2e test setup

## run

* `PORT=3001 npm run dev` tab1
* `PORT=3002 npm run dev` tab2

```bash
# tab 3
$ curl -H "Content-type: application/json" -d '{"nodes":["localhost:3001", "localhost:3002"]}' localhost:3001/connect
$ curl -H "Content-type: application/json" -d '{"nodes":["localhost:3001", "localhost:3002"]}' localhost:3002/connect
```