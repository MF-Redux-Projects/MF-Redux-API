const data = require("./db.js");

const jsonServer = require("json-server");
const index = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

index.use(middlewares);
index.use(router);

index.listen(port);
