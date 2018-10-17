# js版本的简化POW

## todo

* route e2e test setup

## run to test

* `PORT=3001 npm run dev` tab1
* `PORT=3002 npm run dev` tab2

```bash
# tab 3
$ curl -H "Content-type: application/json" -d '{"nodes":["localhost:3001", "localhost:3002"]}' localhost:3001/connect
$ curl -H "Content-type: application/json" -d '{"nodes":["localhost:3001", "localhost:3002"]}' localhost:3002/connect
$ curl -d "sender=3001&receiver=3002&amount=10" http://localhost:3001/add_transaction
$ curl localhost:3001/mine
$ curl localhost:3001/get_chain | json_pp
$ curl localhost:3002/get_chain | json_pp
$ curl localhost:3002/sync
$ curl localhost:3002/get_chain | json_pp
```