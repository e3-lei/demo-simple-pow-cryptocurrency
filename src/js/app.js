import http from "./components/server/http"

let port = process.env.PORT || 3000
http(port)
