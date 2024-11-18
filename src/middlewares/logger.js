import {RequestHandler} from "../App.js";

const green = "\x1b[32m";
const red = "\x1b[31m";
const yellow = "\x1b[33m";
const reset = "\x1b[0m";
const methodsColorMap = {
  GET: green,
  POST: yellow,
  PUT: yellow,
  DELETE: red,
};

function handler(req, res, next) {
  console.log(
    `${methodsColorMap[req.method] + req.method + reset} request listen on ${
      green + req.url + reset
    } at ${yellow + new Date().toLocaleString() + reset}`
  );
  next();
}

const logMiddleware = new RequestHandler(handler);

export default logMiddleware.run.bind(logMiddleware);
