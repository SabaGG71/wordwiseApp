require("dotenv").config();

const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data", "cities.json"));
const middlewares = jsonServer.defaults({
  static: "./dist",
});
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use("/api", router);
