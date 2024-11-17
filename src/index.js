import express, {Router} from "express";
import App, {RequestHandler} from "./App.js";
import Server from "./Server.js";
import middlewares from "./middlewares/index.js";
import routes from "./routes/index.js";
import {errorHandler, notFoundHandler} from "./errors/index.js";

const app = new App({
  app: express(),
  router: Router(),
  middlewares,
  routes,
  notFoundHandler,
  errorHandler,
});
const server = new Server({app: app, port: 8080});

server.start();
